/** @odoo-module **/
import { Component, useState, useRef, onMounted } from "@odoo/owl";
export class TodoForm extends Component {
    static template = "odoo_owl_app.todo_form";
    static props = ['handleCreate']
    setup() {
        this.state = useState({
            todo: {
                id: new Date().getTime(),
                text: '',
                is_completed: false
            },
        })
        this.ref = useRef('input');

        this.handleSubmit = (ev) => {
            ev.preventDefault();
            if (this.state.todo.text) {
                this.props.handleCreate(this.state.todo);
                this.state.todo.text = ""
                this.ref.el.focus();
            }
        }

        onMounted(() => {
            this.ref.el.focus();
        });
    }
}