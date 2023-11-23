# -*- coding: utf-8 -*-

from odoo import models, fields, api, _


class OwlApp(models.Model):
    _name = 'odoo_owl_app.todo'
    _description = 'Odoo OWL App Todo'
    name = fields.Char(string='Todo Reference', copy=False, readonly=True, index=True, default=lambda self: _('New'))
    text = fields.Char()
    is_completed = fields.Boolean()
    
    
    @api.model
    def create(self, vals):
        vals['name'] = self.env['ir.sequence'].next_by_code('odoo_owl_app.todo') # odoo_owl_app.todo is code value 
        return super(OwlApp, self).create(vals)