/** @odoo-module **/

import { Component } from "@odoo/owl";
import { Navbar } from "./Navbar/navbar";
import { Footer } from "./Footer/footer"
export class WebsiteLayout extends Component {
    static template = "odoo_owl_app.website_layout";
    static components = { Navbar, Footer };
    static props = ['todosNumber'];
}