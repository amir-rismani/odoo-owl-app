# -*- coding: utf-8 -*-
# from odoo import http


# class OdooOwlApp(http.Controller):
#     @http.route('/odoo_owl_app/odoo_owl_app', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/odoo_owl_app/odoo_owl_app/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('odoo_owl_app.listing', {
#             'root': '/odoo_owl_app/odoo_owl_app',
#             'objects': http.request.env['odoo_owl_app.odoo_owl_app'].search([]),
#         })

#     @http.route('/odoo_owl_app/odoo_owl_app/objects/<model("odoo_owl_app.odoo_owl_app"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('odoo_owl_app.object', {
#             'object': obj
#         })
