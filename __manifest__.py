# -*- coding: utf-8 -*-
{
    'name': "Odoo OWL App",

    'summary': """
        A test app to learn owl framework""",

    'description': """
        Implementation of an app using owl with odoo
    """,

    'author': "odooers",
    'website': "https://www.odooers.ir",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/16.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Tutorial',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'theme_common'],

    # always loaded
    'data': [
        'security/ir.model.access.csv',
        'data/sequences.xml',
        'views/views.xml',
        'views/templates.xml',
    ],
    'assets': {
        'odoo_owl_app.assets': [
            # required for fa icons
            'web/static/src/libs/fontawesome/css/font-awesome.css',
            
            'odoo_owl_app/static/src/scss/primary_variables.scss',
            'odoo_owl_app/static/src/scss/bootstrap_overridden.scss',
            ('include', 'web._assets_helpers'),
            'web/static/src/scss/pre_variables.scss',
            'web/static/lib/bootstrap/scss/_variables.scss',
            ('include', 'web._assets_bootstrap'),
            ('include', 'web._assets_core'),
            
            
            'odoo_owl_app/static/src/**/*',
        ],
    },
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
}
