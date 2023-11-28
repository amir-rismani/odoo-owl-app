/** @odoo-module **/

import { Component } from "@odoo/owl";

export class Navbar extends Component {
    static template = "odoo_owl_app.navbar";
    static props = ['todosNumber'];
}