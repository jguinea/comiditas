# -*- coding: utf-8 -*-
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor
from bs4 import BeautifulSoup

class RecetabotSpider(CrawlSpider):
    name = 'recetabot'
    allowed_domains = ['blog.daviddejorge.com/']
    start_urls = ['http://blog.daviddejorge.com/2016/07/22/recetas-expres-pollo-frito-guarripe/']
    nombres = []
    procedimientos = []
    ingredientes = []
    def parse(self,response):
        soup = BeautifulSoup(response.text, 'lxml')
        articulo = soup.findAll("div", {"class": "entry-content"})
        articulo = articulo[0]
        children = articulo.findChildren()
        print(articulo)
        lastChild = None
        print('\n Fin artículo \n')
        for child in children:
            if (child.name == "strong") or ((child.name == "h3") and (child['class']!=["entry-content"])):
                self.recetas.append(child.text)
            print '\n'+child.name 
            print child
            lastChild = child