/** @odoo-module */

import { Component, useState, onWillStart } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";


import { WebsiteLayout } from "./layouts/website/layout"
import { TodoForm } from "./components/todo_form/todo_form";
import { Todos } from "./components/todos/todos";

export class Root extends Component {
    static template = "odoo_owl_app.root";
    static components = { WebsiteLayout, TodoForm, Todos };
    static props = {};

    setup() {
        this.state = useState({ todos: [] });
        this.orm = useService("orm");
        this.model = 'odoo_owl_app.todo';

        this.handleChangeState = async (event) => {
            const id = event.target.value;
            await this.orm.write(this.model, [Number(id)], { is_completed: event.target.checked });
            this.refreshTodos();
        };

        this.handleEdit = async (id, text) => {
            await this.orm.write(this.model, [Number(id)], { text });
            this.refreshTodos();

        };

        this.handleRemove = async (id) => {
            await this.orm.unlink(this.model, [id]);
            this.refreshTodos();
        };

        this.onAdd = async (todo) => {
            await this.orm.create(this.model, [todo]);
            this.refreshTodos();
        };

        this.getAllTodos = async () => {
            return await this.orm.searchRead(this.model, []);
        }

        this.refreshTodos = async () => {
            this.state.todos = await this.getAllTodos();
            console.log(this.state.todos)
        }

        onWillStart(() => {
            this.refreshTodos();
        })
    }
}