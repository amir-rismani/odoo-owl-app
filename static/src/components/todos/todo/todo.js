/** @odoo-module **/
import { Component } from "@odoo/owl";
export class Todo extends Component {
    static template = "odoo_owl_app.todo";
    static components = {};
    static props = ['handleChangeState', 'handleEdit', 'handleRemove'];
}