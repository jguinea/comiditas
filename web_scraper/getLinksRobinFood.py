import re
import xml.etree.ElementTree as ET
import urllib2 
from lxml import html
from bs4 import BeautifulSoup
import requests


#------------------Primer intento a pelo-----------------#
'''
def getLinks(filename):
	tree = ET.parse(filename)
	links=[]
	root=tree.getroot()
	regex = "(http:\/\/blog.daviddejorge.com\/[0-9]{4}\/[0-9]{2}\/[0-9]{2}\/(([A-z]+)-)+)([A-z]+)\/"
	for child in root:
		url = child.find('loc').text	
		if url is not None:
			if re.match(regex, url) is not None:
				links.append(url)
	return links
def isLinkReceta(url):
	response = urllib2.urlopen(url)
	htmlString = response.read()
	tree = html.fromstring(htmlString)
	title = tree.xpath('head/title/text()')
	return 'ROBINFOOD' in title[0]
def limpiaLinks(linksIn):
	links=[]
	for link in linksIn:
		if isLinkReceta(link):
			links.append(link)
			print link
	return links
'''
def getLinksFromUrl(url):
	r  = requests.get(url)
	data = r.text
	soup = BeautifulSoup(data, "lxml")
	for h1 in soup.find_all('h1'):
		a= h1.find('a')
		if a:
			print(a.get('href'))

def isLinkOK(link):
	r = requests.get(link)
	return r.ok

def getRecipeLinks():
	link = 'http://blog.daviddejorge.com/category/robin-food-tv/page/'
	page = 1
	while isLinkOK(link+str(page)):
		getLinksFromUrl(link+str(page))
		page+=1
getRecipeLinks()

	


