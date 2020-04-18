# -*- coding: utf-8 -*-
import scrapy
import json
import re
import csv
from bs4 import BeautifulSoup

### CONFIGURAÇÃO ###
## LOGIN
csrf_name = 'e9bb90f48da6b4bafbfc27467595978f'
csrf_token = '03d42f1e7d1ec992bfc8a2ebb0f2da61ff39b265cc54d4de3ade250d130c8b4e144a5c45e83781327548991dd70bd9ada2a045b966234499677d73fb3b16f68d'
last_part_url = '1587102544909'
csrf_validity = True

## OPÇÕES
#'driver' - piloto # não desenvolvido
#'staff' - funcionário
search_by = 'staff' # Só funciona staff, por enquanto

# Qual foi o último ID procurado?
#last_driver_id_searched = 11024067
#last_staff_id_searched = 11024067

def to_infinity():
    i = 0
    while True:
        i += 1
        yield i


# def cleanhtml(raw_html):
#   cleaner = re.compile('<.*?>|&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-f]{1,6});')
#   cleantext = re.sub(cleaner, '', raw_html)

#   cleantext = cleantext.split()
#   cleantext = ' '.join(cleantext)
#   #cleantext  = [word for word in cleantext if word.lower() not in words_blacklist]
#   # cleantext = cleantext.replace(" ", "")

#   return cleantext

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

        yield scrapy.http.JsonRequest(url=f'https://igpmanager.com/index.php?action=fetch&d={search_by}&id=2316444&csrfName={csrf_name}&csrfToken={csrf_token}&_="{last_part_url}', callback=self.filter_data)
            #11024065 CD
            #11024066 TD
            #11024067 DR
            #10946609 FREE CD
    def filter_data(self, response):
        data = json.loads(response.body)

        is_employee_valid = data['valid']
        is_csrf_valid = data['csrfValid']

        if is_csrf_valid:
            if is_employee_valid:
                print("Entrou if 1")
                employee_type = response.url.split('&')[1]
                employee_id = re.search(r'\d+', response.url.split('&')[2]).group(0)
                is_cd = response.xpath("//text()[contains(.,'Chief Designer')]").get()
                is_td = response.xpath("//text()[contains(.,'Technical Director')]").get()

                if employee_type == 'd=staff':
                    if is_cd:
                        print("Entrou if 2")
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
                            print("Chamou record")
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
                                
                            record_good_cd(employee_id, 'Designer Chefe', level, strength_attribute[0], weakness_attribute[0], employee_url)

        else:
            global csrf_validity
            csrf_validity = False
            # Gravar em qual ID parou


def record_good_cd(employee_id, employee_category, level, strength, weakness, url):
    with open("staff/good_cd.csv", "w") as file:
        writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

        writer.writerow(['ID', 'CATEGORIA', 'LEVEL', 'ESPECIALIDADE', 'FRAQUEZA', 'URL'])
        writer.writerow([employee_id, employee_category, level, strength, weakness, url])
