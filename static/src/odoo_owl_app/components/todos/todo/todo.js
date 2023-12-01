/** @odoo-module **/
import { Component, useState, useRef } from "@odoo/owl";
export class Todo extends Component {
    static template = "odoo_owl_app.todo";
    static components = {};
    static props = ['todo', 'handleChangeState', 'handleEdit', 'handleRemove'];

    setup() {
        this.state = useState({ isEdit: false });
        this.ref = useRef("editInput");
        this.enableEditMode = () => {
            this.state.isEdit = true;
            setTimeout(() => {
                this.ref.el.focus();
            }, 100);
        }
        this.editTodo = (ev, id) => {
            if (ev.keyCode === 13 && ev.target.value !== "") {
                this.props.handleEdit(id, ev.target.value);
                this.state.isEdit = false;
            }
        }
    }
}