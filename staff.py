# -*- coding: utf-8 -*-
import scrapy
import json
import re
import csv
from bs4 import BeautifulSoup
import os.path
from datetime import datetime

### === CONFIGURATION === ###

# LOGIN
csrf_name = 'fb37556b11d367c975423a68bfca5398'
csrf_token = '60b5d37b6ab980b7d9b3180d374d73709644123db60cfdbc325a944330126072a2e5972d28002058c7a5083dcd800a562cb069e0201622321c00e208aa0e2d94'
last_part_url = '1587259691878'

### ===================== ###

csrf_validity = True

class StaffSpider(scrapy.Spider):
    name = "staff"

    url = 'https://igpmanager.com/app/p=login'
    login_url = 'https://igpmanager.com/index.php?action=send&addon=igp&type=login&jsReply=login'
    start_urls = [url]

    def parse(self, response):
        data = {
            'loginUsername': 'kylenolan19859@hotmail.com',
            'loginPassword': '@kyleNolaN5984'
        }

        yield scrapy.FormRequest(url=self.login_url, formdata=data, callback=self.get_data)

    def get_data(self, response):
        global last_staff_id_searched
        invalid_staff_ids = get_invalid_staff_ids()

        if any(f'{last_staff_id_searched}' in i for i in invalid_staff_ids):
            last_staff_id_searched += 1

        if not any(f'{last_staff_id_searched}' in i for i in invalid_staff_ids):
            if csrf_validity:
                yield scrapy.http.JsonRequest(url=f'https://igpmanager.com/index.php?action=fetch&d=staff&id={last_staff_id_searched}&csrfName={csrf_name}&csrfToken={csrf_token}&_={last_part_url}', callback=self.filter_data)

    def filter_data(self, response):
        global last_staff_id_searched
        last_staff_id_searched += 1
        employee_id = re.search(r'\d+', response.url.split('&')[2]).group(0)

        print(f'REQUESTED ID {employee_id}')
        record_log(f'REQUESTED ID {employee_id}')
        record_searched_staff_ids(employee_id)

        data = json.loads(response.body)

        is_employee_valid = data['valid']
        is_csrf_valid = data['csrfValid']

        if is_csrf_valid:
            if is_employee_valid:
                employee_type = response.url.split('&')[1]
                is_cd = response.xpath("//text()[contains(.,'Chief Designer')]").get()
                available = response.xpath("//text()[contains(.,'Buy now')]").get()

                if employee_type == 'd=staff':
                    if is_cd:
                        good_strength = ['Acceleration','Braking', 'Handling', 'Downforce']
                        good_weakness = ['Cooling', 'Reliability']
                        starRating = data['vars']['starRating']
                        skillTable = data['vars']['skillTable']

                        level = BeautifulSoup(starRating, 'lxml').body.find(text=True, recursive=False)
                        level = int(re.search(r'\d+', level).group(0))

                        skillTable = [[cell.text for cell in row("td")]for row in BeautifulSoup(skillTable, 'lxml')("tr")]

                        strength = [word for line in skillTable[2] for word in line.split()]
                        strength_attribute = [word for word in strength if word in good_strength]

                        weakness = [word for line in skillTable[3]for word in line.split()]
                        weakness_attribute = [word for word in weakness if word in good_weakness]

                        if strength_attribute and weakness_attribute:
                            if available:
                                employee_url = f'https://igpmanager.com/app/d=staff&id={employee_id}&tab=attributes'

                                if strength_attribute[0] == 'Acceleration':
                                    strength_attribute[0] = 'Aceleração'

                                elif strength_attribute[0] == 'Braking':
                                    strength_attribute[0] = 'Frenagem'

                                elif strength_attribute[0] == 'Handling':
                                    strength_attribute[0] = 'Dirigibilidade'

                                else:
                                    strength_attribute[0] = 'Aerodinâmica'

                                if weakness_attribute[0] == 'Cooling':
                                    weakness_attribute[0] = 'Resfriamento'

                                else:
                                    weakness_attribute[0] = 'Confiabilidade'                                

                                print(f'ID {employee_id} RECORDED')
                                record_log(f'ID {employee_id} RECORDED')
                                record_good_cd(employee_id, level, strength_attribute[0], weakness_attribute[0], employee_url)
            else:
                print(f'INVALID ID {employee_id}')
                record_log(f'INVALID ID {employee_id}')
                record_invalid_staff_ids(employee_id)

        else:
            global csrf_validity
            csrf_validity = False
            print(f'INVALID CSRF ID {employee_id}')
            record_log(f'INVALID CSRF ID {employee_id}')
            record_searched_staff_ids(employee_id, 2)

        return self.get_data(response)


def record_good_cd(employee_id, level, strength, weakness, url):
    with open('staff/good_cd.csv', 'a') as file:
        writer = csv.writer(file, delimiter=',',
                            quotechar='"', quoting=csv.QUOTE_MINIMAL)

        writer.writerow([employee_id, level, strength, weakness, url])


def record_invalid_staff_ids(employee_id):
    with open('staff/invalid_staff_ids.csv', 'a') as file:
        writer = csv.writer(file, delimiter=',',
                            quotechar='"', quoting=csv.QUOTE_MINIMAL)
        writer.writerow([employee_id])
# called_from
# 1 - If called from an invalid id request
# 2 - if called from an invalid csrf request


def record_searched_staff_ids(employee_id, called_from=1):
    if called_from == 2:
        with open('staff/searched_staff_ids.csv', 'a') as file:
            writer = csv.writer(file, delimiter=',',
                                quotechar='"', quoting=csv.QUOTE_MINIMAL)
            writer.writerow([int(employee_id) - 1])
    else:
        with open('staff/searched_staff_ids.csv', 'a') as file:
            writer = csv.writer(file, delimiter=',',
                                quotechar='"', quoting=csv.QUOTE_MINIMAL)
            writer.writerow([employee_id])


def get_last_valid_staff_id_searched():
    if os.path.exists('staff/searched_staff_ids.csv'):
        with open('staff/searched_staff_ids.csv', newline='') as file:
            staff_ids = file.readlines()
            last_staff_id = max([int(i) for i in staff_ids])
            if last_staff_id:
                return last_staff_id
    return 1


def get_invalid_staff_ids():
    if os.path.exists('staff/invalid_staff_ids.csv'):
        with open('staff/invalid_staff_ids.csv', newline='') as file:
            reader = csv.reader(file)
            invalid_staff_ids = list(reader)
            if invalid_staff_ids:
                return invalid_staff_ids
    return []

def record_log(message):
    now = datetime.now().strftime("%d/%m/%Y %H:%M:%S")

    with open('staff/log.csv', 'a') as file:
        writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        
        writer.writerow([f'{message} AT {now}'])


last_staff_id_searched = get_last_valid_staff_id_searched()
