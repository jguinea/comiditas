# -*- coding: utf-8 -*-
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor
from bs4 import BeautifulSoup

class RecetabotSpider(CrawlSpider):
    name = 'recetabot'
    allowed_domains = ['blog.daviddejorge.com/']
    start_urls = ['http://blog.daviddejorge.com/2016/07/22/recetas-expres-pollo-frito-guarripe/']
    recetas = []
    def parse(self,response):
        soup = BeautifulSoup(response.text, 'lxml')
        articulo = soup.find('article')
        children = articulo.findChildren()
        lastChild = None
        for child in children:
            if (child.name == "strong") or ((child.name == "h3") and (child['class']!=["sd-title"])):
                self.recetas.append({'name': child.text})
        