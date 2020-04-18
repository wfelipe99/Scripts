# -*- coding: utf-8 -*-
import scrapy
import json
import re
import csv
from bs4 import BeautifulSoup
import itertools
import os.path

### === CONFIGURATION === ###

## LOGIN
csrf_name = 'e9bb90f48da6b4bafbfc27467595978f'
csrf_token = '03d42f1e7d1ec992bfc8a2ebb0f2da61ff39b265cc54d4de3ade250d130c8b4e144a5c45e83781327548991dd70bd9ada2a045b966234499677d73fb3b16f68d'
last_part_url = '1587102544909'

## OPTIONS
#'driver' - search for pilot # not developed yet
#'staff' - search for staff
search_by = 'staff'

### ===================== ###


csrf_validity = True

class IgpSpider(scrapy.Spider):
    name = "igp"

    url = 'https://igpmanager.com/app/p=login'
    login_url = 'https://igpmanager.com/index.php?action=send&addon=igp&type=login&jsReply=login'
    start_urls = [url]

    def parse(self, response):
        data = {
            'loginUsername': 'lewishamilton@mercedes.com',
            'loginPassword': 'L@hmiTn!12#'
        }

        yield scrapy.FormRequest(url=self.login_url, formdata=data, callback=self.get_data)

    def get_data(self, response):
        for employee_id in itertools.count(get_last_valid_staff_id_searched(), 1):
            if csrf_validity:
                if employee_id == 10:
                    break

                else:
                    print(f'REQUESTING ID {employee_id}')
                    yield scrapy.http.JsonRequest(url=f'https://igpmanager.com/index.php?action=fetch&d={search_by}&id={employee_id}&csrfName={csrf_name}&csrfToken={csrf_token}&_="{last_part_url}', callback=self.filter_data)
            #11024065 CD
            #11024066 TD
            #11024067 DR
            #10946609 FREE CD
    def filter_data(self, response):
        data = json.loads(response.body)

        is_employee_valid = data['valid']
        is_csrf_valid = data['csrfValid']

        if is_csrf_valid:
            employee_id = re.search(r'\d+', response.url.split('&')[2]).group(0)
            
            if is_employee_valid:
                employee_type = response.url.split('&')[1]
                is_cd = response.xpath("//text()[contains(.,'Chief Designer')]").get()
                #is_td = response.xpath("//text()[contains(.,'Technical Director')]").get() # Impossible to develop. How to know if it's good since the star is based on manager's level?

                if employee_type == 'd=staff':
                    if is_cd:
                        good_strength = ['Acceleration', 'Braking', 'Handling', 'Downforce']
                        good_weakness = ['Cooling', 'Reliability']
                        starRating = data['vars']['starRating']
                        skillTable = data['vars']['skillTable']

                        level = BeautifulSoup(starRating, 'lxml').body.find(text = True, recursive = False)
                        level = int(re.search(r'\d+', level).group(0))

                        skillTable = [[cell.text for cell in row("td")]
                                                for row in BeautifulSoup(skillTable, 'lxml')("tr")]

                        strength = [word for line in skillTable[2] for word in line.split()]
                        strength_attribute = [word for word in strength if word in good_strength]

                        weakness = [word for line in skillTable[3] for word in line.split()]
                        weakness_attribute = [word for word in weakness if word in good_weakness]

                        employee_url = f'https://igpmanager.com/app/d=staff&id={employee_id}&tab=attributes'

                        if strength_attribute and weakness_attribute:
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
                            record_good_cd(employee_id, 'Designer Chefe', level, strength_attribute[0], weakness_attribute[0], employee_url)
                            record_last_valid_staff_id_searched(employee_id)
            else:
                print(f'INVALID ID {employee_id}')
                record_invalid_staff_ids(employee_id)

        else:
            global csrf_validity
            csrf_validity = False
            print('INVALID CSRF')
            record_last_valid_staff_id_searched(employee_id, 2)


def record_good_cd(employee_id, employee_category, level, strength, weakness, url):
    with open('staff/good_cd.csv', 'a') as file:
        writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

        writer.writerow(['ID', 'CATEGORIA', 'LEVEL', 'ESPECIALIDADE', 'FRAQUEZA', 'URL'])
        writer.writerow([employee_id, employee_category, level, strength, weakness, url])

def record_invalid_staff_ids(employee_id):
    with open('staff/invalid_staff_ids.csv', 'a') as file:
        writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

        writer.writerow([employee_id])

# called_from
#1 - If called from an invalid id request
#2 - if called from an invalid csrf request
def record_last_valid_staff_id_searched(employee_id, called_from = 1):
    if called_from == 2:
        with open('staff/last_staff_id_searched.txt', 'w') as file:
            writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

            writer.writerow([int(employee_id) - 1])

    else:
        with open('staff/last_staff_id_searched.txt', 'w') as file:
            writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

            writer.writerow([employee_id])

def get_last_valid_staff_id_searched():
    if os.path.exists('staff/last_staff_id_searched.txt'):
        with open('staff/last_staff_id_searched.txt', newline = '') as file:
            reader = csv.reader(file)
            staff_id = list(reader)
            
            if staff_id:
                return int(staff_id[0][0])
            
            return 1

    return 1
