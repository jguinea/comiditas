# -*- coding: utf-8 -*-
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor
from bs4 import BeautifulSoup

with open('/home/javier/Desktop/comiditas/web_scraper/links.txt') as f:
    lines = f.read().splitlines()
print lines[256]
class RecetabotSpider(CrawlSpider):
    name = 'recetabot'
    allowed_domains = ['blog.daviddejorge.com/']
    start_urls = lines
    recetas=[]
    nombres = []
    procedimientos = {}
    ingredientes = {}
   

    def parse(self,response):
        def isChildTitulo(child):
            if (child.name == "strong"):
                return True
            if 'class' in child:
                if ((child['class']!=["entry-content"]) and ((child['class']!=['sd-title']))):
                    return True
            return False
        soup = BeautifulSoup(response.text, 'lxml')
        articulo = soup.findAll("div", {"class": "entry-content"})
        articulo = articulo[0]
        children = articulo.findChildren()
        lastChild = None
        empieza = False
        recetaNombre=""
        procedimiento = ""
        ingredientesReceta=[]
        for child in children:
            if empieza:
                for subchild in child:
                    if (subchild.name):
                        pass
                    else:
                        if subchild.startswith('\n'):
                            subchild=subchild[1:]  
                        ingredientesReceta.append(subchild.encode('utf-8'))
                empieza = False

            if isChildTitulo(child):
                recetaNombre = child.text.encode('utf-8')
                empieza = True
            if lastChild:
                if lastChild.name:
                    if lastChild.name == "br":
                        if child.name =="p":
                            for subchild in child:
                                if (subchild.name):
                                    pass
                                else:
                                    procedimiento+=subchild.encode('utf-8')
            lastChild = child 
        if (recetaNombre != "") and (procedimiento != "") and (ingredientesReceta!=[]):
            self.recetas.append(recetaNombre)
            self.procedimientos[recetaNombre]=procedimiento
            self.ingredientes[recetaNombre]=ingredientesReceta
        for receta in self.recetas:
            print 'Receta: '+receta
            print '\n Ingredientes:\n'+str(self.ingredientes[receta])
            print '\n'+self.procedimientos[receta]
            print '\n\n'
