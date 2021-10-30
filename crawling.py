import urllib.request
import urllib.parse
from bs4 import BeautifulSoup
import pandas as pd
import openpyxl
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db


cred = credentials.Certificate('react-with-firebase-f9b6e-firebase-adminsdk-nqjsb-0b44051b21.json')
firebase_admin.initialize_app(cred, {
    'databaseURL' : 'https://react-with-firebase-f9b6e-default-rtdb.firebaseio.com/'
})

dir = db.reference('news/title')
dor = db.reference('news/href')

baseUrl = 'https://search.naver.com/search.naver?where=news&query='
plusUrl = '경제'
baseUrlTail = '&sort=1&photo=0&field=0&pd=0&ds=&de=&mynews=0&office_type=0&office_section_code=0&news_office_checked=&nso=so:dd,p:all,a:all&start='
url = baseUrl + urllib.parse.quote_plus(plusUrl) + baseUrlTail


count = 0

num = 1
newurl = url + str(num)
html = urllib.request.urlopen(newurl).read()
soup = BeautifulSoup(html, 'html.parser')
title = soup.find_all(class_='news_tit')
href = soup.find_all("a")
for j in title: 
    dir.update({count : str(j.attrs['title'])})
    dor.update({count : str(j.attrs['href']).replace("\"", "")})
    count += 1

kospi_dir = db.reference('king/kospi')

basic_url = "https://finance.naver.com/sise/sise_index.naver?code=KOSPI"

fp = urllib.request.urlopen(basic_url)

source = fp.read()

fp.close()

soup = BeautifulSoup(source, 'html.parser')
soup1 = soup.findAll("div","quotient dn")
soup2 = soup.find_all("span","fluc")


kospi_price = soup1[0].text
kospi_price = (kospi_price.split('\n'))[1]
kospi_up = str(soup2[0].text)
kospi_up = ((kospi_up.split("%"))[0]+'%').split(' ')
kospi_up = kospi_up[0] + '(' + kospi_up[1] + ')'
#print(soup)

kospi_dir.update({'price': str(kospi_price)})
kospi_dir.update({'up' : kospi_up})

nasdaq_dir = db.reference('king/nasdaq')

basic_url = "https://finance.naver.com/world/sise.naver?symbol=NAS@IXIC"

fp = urllib.request.urlopen(basic_url)

source = fp.read()

fp.close()

soup = BeautifulSoup(source, 'html.parser')
soup1 = soup.findAll("p","no_today")
soup2 = soup.find_all("p","no_exday")


nasdaq_price = soup1[0].text
nasdaq_price = (nasdaq_price.split('\n'))[2]
nasdaq_up = str(soup2[0].text).split('\n')
nasdaq_up = nasdaq_up[4] + nasdaq_up[7] + nasdaq_up[8] + nasdaq_up[9]
#print(soup)


nasdaq_dir.update({'price': str(nasdaq_price)})
nasdaq_dir.update({'up' : nasdaq_up})

sp500_dir = db.reference('king/s%p500')

basic_url = "https://finance.naver.com/world/sise.naver?symbol=SPI@SPX"

fp = urllib.request.urlopen(basic_url)

source = fp.read()

fp.close()

soup = BeautifulSoup(source, 'html.parser')
soup1 = soup.findAll("p","no_today")
soup2 = soup.find_all("p","no_exday")


sp_price = soup1[0].text
sp_price = (sp_price.split('\n'))[2]
sp_up = str(soup2[0].text).split('\n')
sp_up = sp_up[4] + sp_up[7] + sp_up[8] + sp_up[9]
#print(soup)


sp500_dir.update({'price': str(sp_price)})
sp500_dir.update({'up' : sp_up})

dollar_dir = db.reference('king/dollar')

basic_url = "https://finance.naver.com/marketindex/exchangeDetail.naver?marketindexCd=FX_USDKRW"

fp = urllib.request.urlopen(basic_url)

source = fp.read()

fp.close()

soup = BeautifulSoup(source, 'html.parser')
soup1 = soup.findAll("p","no_today")
soup2 = soup.find_all("p","no_exday")


dollar_price = soup1[0].text
dollar_price = (dollar_price.split('\n'))[3]
dollar_up = str(soup2[0].text).split('\n')
dollar_up = dollar_up[4] + dollar_up[7] + dollar_up[8] + dollar_up[9]
#print(soup)

dollar_dir.update({'price': str(dollar_price)})
dollar_dir.update({'up' : dollar_up})