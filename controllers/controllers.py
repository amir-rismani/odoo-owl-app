# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request, route, Controller

class OwlApp(Controller):
    @http.route(['/owl-app'], type='http', auth='public')
    def root(self):
        return request.render('odoo_owl_app.root')
