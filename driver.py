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
csrf_name = '7e1e0a674cc752be8feff5bfa6f689'
csrf_token = 'd56e097dc1afd3069895f376682fc30513062b1b2480c28f79a71d884223218de201e48a5b07fb105876c10a7e5ec357392c2063e77b3baf55b965f0b290b184'
last_part_url = '1587321784332'

### ===================== ###

csrf_validity = True

class DriverSpider(scrapy.Spider):
    name = "driver"

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
        global last_driver_id_searched
        invalid_driver_ids = get_invalid_driver_ids()

        if any(f'{last_driver_id_searched}' in i for i in invalid_driver_ids):
            last_driver_id_searched += 1

        if not any(f'{last_driver_id_searched}' in i for i in invalid_driver_ids):
            if csrf_validity:
                yield scrapy.http.JsonRequest(url=f'https://igpmanager.com/index.php?action=fetch&d=driver&id={last_driver_id_searched}&csrfName={csrf_name}&csrfToken={csrf_token}&_={last_part_url}', callback=self.filter_data)

    def filter_data(self, response):
        global last_driver_id_searched
        last_driver_id_searched += 1
        employee_id = re.search(r'\d+', response.url.split('&')[2]).group(0)

        print(f'REQUESTED ID {employee_id}')
        record_log(f'REQUESTED ID {employee_id}')
        record_searched_driver_ids(employee_id)

        data = json.loads(response.body)

        is_employee_valid = data['valid']
        is_csrf_valid = data['csrfValid']

        if is_csrf_valid:
            if is_employee_valid:
                available = response.xpath("//text()[contains(.,'Buy now')]").get()

                if data['vars']:
                    starRating = data['vars']['starRating']
                    sTalent = data['vars']['sTalent']

                    level = BeautifulSoup(starRating, 'lxml').body.find(text=True, recursive=False)
                    level = int(re.search(r'\d+', level).group(0))

                    talent = BeautifulSoup(sTalent, 'lxml').body.span.find(text=True, recursive=False)
                    talent = int(re.search(r'\d+', talent).group(0))
                
                else:
                    talent = 0 # talent = 0 if the driver is racing. If he's racing it's because he's already in a team

                if talent == 20:
                    if available:
                        employee_url = f'https://igpmanager.com/app/d=driver&id={employee_id}&tab=attributes'

                        print(f'ID {employee_id} RECORDED')
                        record_log(f'ID {employee_id} RECORDED')
                        record_good_driver(employee_id, level, talent, employee_url)
            else:
                print(f'INVALID ID {employee_id}')
                record_log(f'INVALID ID {employee_id}')
                record_invalid_driver_ids(employee_id)

        else:
            global csrf_validity
            csrf_validity = False
            print(f'INVALID CSRF ID {employee_id}')
            record_log(f'INVALID CSRF ID {employee_id}')
            record_searched_driver_ids(employee_id, 2)

        return self.get_data(response)

def record_good_driver(employee_id, level, talent, url):
    with open('driver/good_driver.csv', 'a') as file:
        writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

        writer.writerow([employee_id, level, talent, url])

def record_invalid_driver_ids(employee_id):
    with open('driver/invalid_driver_ids.csv', 'a') as file:
        writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        writer.writerow([employee_id])

# called_from
# 1 - If called from an invalid id request
# 2 - if called from an invalid csrf request
def record_searched_driver_ids(employee_id, called_from=1):
    if called_from == 2:
        with open('driver/searched_driver_ids.csv', 'a') as file:
            writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
            writer.writerow([int(employee_id) - 1])
    else:
        with open('driver/searched_driver_ids.csv', 'a') as file:
            writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
            writer.writerow([employee_id])

def get_last_valid_driver_id_searched():
    if os.path.exists('driver/searched_driver_ids.csv'):
        with open('driver/searched_driver_ids.csv', newline='') as file:
            driver_ids = file.readlines()
            last_driver_id = max([int(i) for i in driver_ids])
            if last_driver_id:
                return last_driver_id
    return 1


def get_invalid_driver_ids():
    if os.path.exists('driver/invalid_driver_ids.csv'):
        with open('driver/invalid_driver_ids.csv', newline='') as file:
            reader = csv.reader(file)
            invalid_driver_ids = list(reader)
            if invalid_driver_ids:
                return invalid_driver_ids
    return []

def record_log(message):
    now = datetime.now().strftime("%d/%m/%Y %H:%M:%S")

    with open('driver/log.csv', 'a') as file:
        writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        
        writer.writerow([f'{message} AT {now}'])


last_driver_id_searched = get_last_valid_driver_id_searched()
