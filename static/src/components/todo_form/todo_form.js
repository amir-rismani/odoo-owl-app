/** @odoo-module **/
import { Component, useState, useRef, onMounted } from "@odoo/owl";
export class TodoForm extends Component {
    static template = "odoo_owl_app.todo_form";
    static props = ['onAdd']
    setup() {
        this.state = useState({ input: "" })
        this.ref = useRef('input');

        this.handleSubmit = (ev) => {
            ev.preventDefault();
            this.props.onAdd(this.state.input);
            this.state.input = ""
            this.ref.el.focus();

        }
        onMounted(() => {
            this.ref.el.focus();
        });
    }


}