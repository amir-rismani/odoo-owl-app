# -*- coding: utf-8 -*-

# from odoo import models, fields, api


# class odoo_owl_app(models.Model):
#     _name = 'odoo_owl_app.odoo_owl_app'
#     _description = 'odoo_owl_app.odoo_owl_app'

#     name = fields.Char()
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         for record in self:
#             record.value2 = float(record.value) / 100
