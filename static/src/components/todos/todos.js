/** @odoo-module **/
import { Component } from "@odoo/owl";
import { Todo } from "./todo/todo";
export class Todos extends Component {
    static template = "odoo_owl_app.todos";
    static components = { Todo };
    static props = ['todos', 'handleChangeState', 'handleEdit', 'handleRemove'];

    setup() {
        this.getTodosNumber = () => { return this.props.todos.length }
        this.getCompletedTodosNumber = () => { return this.props.todos.filter(todo => todo.is_completed).length }
    }
}