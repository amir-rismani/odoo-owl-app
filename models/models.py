# -*- coding: utf-8 -*-

from odoo import models, fields, api


class odoo_owl_app(models.Model):
    _name = 'odoo_owl_app.todo'
    _description = 'Odoo OWL App Todo'

    text = fields.Char()
    is_completed = fields.Boolean()