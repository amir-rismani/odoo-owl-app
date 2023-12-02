/** @odoo-module **/
import { Component, useState, useRef, onMounted } from "@odoo/owl";
export class TodoForm extends Component {
    static template = "odoo_owl_app.todo_form";
    static props = ['onAdd']
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
            let text = this.state.todo.text;
            if (text) {
                this.props.onAdd(this.state.todo);
                text = ""
                this.ref.el.focus();
            }
        }
        onMounted(() => {
            this.ref.el.focus();
        });
    }


}