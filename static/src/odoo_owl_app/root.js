/** @odoo-module */

import { Component, useState, useSubEnv, onWillStart } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";


import { WebsiteLayout } from "./layouts/website/layout"
import { TodoForm } from "./components/todo_form/todo_form";
import { Todos } from "./components/todos/todos";

export class Root extends Component {
    static template = "odoo_owl_app.root";
    static components = { WebsiteLayout, TodoForm, Todos };
    static props = {};

    setup() {
        this.todos = useState([]);
        this.orm = useService("orm");
        this.model = 'odoo_owl_app.todo';

        this.handleChangeState = (event) => {
            const id = event.target.value;
            const index = this.todos.findIndex(todo => todo.id === parseInt(id))
            this.todos[index].is_completed = !this.todos[index].is_completed
        };

        this.handleEdit = (id, title) => {
            const index = this.todos.findIndex(todo => todo.id === parseInt(id))
            this.todos[index].title = title
        };

        this.handleRemove = (id) => {
            console.log('remove', id)
            const index = this.todos.findIndex(todo => todo.id === parseInt(id))
            this.todos.splice(index, 1);
        };

        this.onAdd = (title) => {
            const todo = {
                userId: 1,
                id: new Date().getTime(),
                title,
                is_completed: false
            }
            this.todos.push(todo)
        };
    }
}