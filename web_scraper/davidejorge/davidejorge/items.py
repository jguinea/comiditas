# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class DavidejorgeItem(scrapy.Item):
    # define the fields for your item here like:
    nombre = scrapy.Field()
    ingredientes = scrapy.Field()
    procedimiento = scrapy.Field()
