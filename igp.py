# -*- coding: utf-8 -*-
import scrapy
import json
import re
import csv
from bs4 import BeautifulSoup
from collections import OrderedDict

### CONFIGURAÇÃO ###
## LOGIN
csrf_name = 'e9bb90f48da6b4bafbfc27467595978f'
csrf_token = '03d42f1e7d1ec992bfc8a2ebb0f2da61ff39b265cc54d4de3ade250d130c8b4e144a5c45e83781327548991dd70bd9ada2a045b966234499677d73fb3b16f68d'
last_part_url = '1587102544909'
csrf_validity = True

## OPÇÕES
#'driver' - piloto
#'staff' - funcionário
search_by = 'staff'

# Qual foi o último ID procurado?
last_driver_id_searched = 11024067
last_staff_id_searched = 11024067

def to_infinity():
    i = 0
    while True:
        i += 1
        yield i


def cleanhtml(raw_html):
  cleaner = re.compile('<.*?>|&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-f]{1,6});')
  cleantext = re.sub(cleaner, '', raw_html)

  cleantext = cleantext.split()
  cleantext = ' '.join(cleantext)
  #cleantext  = [word for word in cleantext if word.lower() not in words_blacklist]
  # cleantext = cleantext.replace(" ", "")

  return cleantext

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
        # for employee_id in to_infinity():
        #     if csrf_validity:
        #         if employee_id == 2:
        #             break

        yield scrapy.http.JsonRequest(url=f'https://igpmanager.com/index.php?action=fetch&d={search_by}&id=11024065&csrfName={csrf_name}&csrfToken={csrf_token}&_="{last_part_url}', callback=self.filter_data)
            #11024065 CD
            #11024066 TD
            #11024067 DR
            #10946609 FREE CD
    def filter_data(self, response):
        data = json.loads(response.body)

        ### PRA FAZER:
        ### Transformar o HTML em Json pra conseguir extrair as informações da Staff

        #is_employee_valid = data['valid']
        html = data['vars']['skillTable'].split()
        html_to_json = json.dumps(html)
        #html_to_json = json.dumps(html)
        #json_decoded = json.loads(html_to_json)
        #strength = json_decoded[0]
        #is_csrf_valid = data[] 

        #print(type(data))
        print(type(html_to_json)) 
        print(html_to_json)
        #print(type(html_to_json)) 
        #print(html_to_json)
        #print(is_csrf_valid) 
      
        ## LÓGICA AINDA É VÁLIDA, BASTA CONSEGUIR TRANSFORMAR O HTML EM JSON
        # if is_csrf_valid:
        #     if is_employee_valid:
        #         employee_type = response.url.split('&')[1]
        #         employee_id = response.url.split('&')[2]
        #         is_cd = response.xpath("//text()[contains(.,'Chief Designer')]").get()
        #         is_td = response.xpath("//text()[contains(.,'Technical Director')]").get()

        #         if employee_type == 'd=staff':
        #             if is_cd:
        #                 attributes = ['Acceleration', 'Braking', 'Handling', 'Downforce']
        #                 html = data['vars']['skillTable']
        #                 html_to_json = json.loads(html)

        #                 print(html_to_json)

        #             elif is_td:
        #                 print('É TD')

        # else:
        #     csrf_validity = False
            
        # data = json.loads(response.body)
        # print(self.i)
        
        # if search_by == 'staff':
        #     with open('staff/descartados.csv', 'w', newline='') as file:
        #         writer = csv.writer(file)
        #         writer.writerow(["SN", "Name", "Contribution"])
        #         writer.writerow([1, "Linus Torvalds", "Linux Kernel"])
        #         writer.writerow([2, "Tim Berners-Lee", "World Wide Web"])
        #         writer.writerow([3, "Guido van Rossum", "Python Programming"])
        # print(data)
        # availabe = response.xpath("//*[contains(text(), 'Buy now')]//text()").get()
        # if availabe:
        #     print('Disponível para compra')
        # else:
        #     print('N disponível para compra')
        # is_cd = response.xpath("//text()[contains(.,'Chief Designer')]").get()
        # is_td = response.xpath("//text()[contains(.,'Technical Director')]").get()
        # strength= response.xpath("//a[contains(.,'Strength')]").get()

        # print(type(strength))
        # print(strength)

        # if is_cd:
        #     print('É Chief Designer')
        # elif is_td:
        #     print('É Technical Director')
        # else:
        #     print('É Doctor')
        

        # with open('staff.csv', 'w') as f:
        #     f.write(response.xpath("//*[contains(text(), 'Talent')]//text()").get())
