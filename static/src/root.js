/** @odoo-module */

import { Component, useState } from "@odoo/owl";
import { WebsiteLayout } from "./layouts/website/layout"
import { TodoForm } from "./components/todo_form/todo_form";
import { Todos } from "./components/todos/todos";

const todos = [{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "is_completed": false
},
{
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "is_completed": false
},
{
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "is_completed": false
},
]
export class Root extends Component {
    static template = "odoo_owl_app.root";
    static components = { WebsiteLayout, TodoForm, Todos };
    static props = {};

    setup() {
        this.todos = useState(todos)

        this.handleChangeState = (event) => {
            const id = event.target.value;
            const index = this.todos.findIndex(todo => todo.id === parseInt(id))
            this.todos[index].is_completed = !this.todos[index].is_completed
        }

        this.handleEdit = (id, title) => {
            const index = this.todos.findIndex(todo => todo.id === parseInt(id))
            this.todos[index].title = title
        }

        this.handleRemove = (id) => {
            console.log('remove', id)
        }

        this.onAdd = (title) => {
            const todo = {
                userId: 1,
                id: new Date().getTime(),
                title,
                is_completed: false
            }
            this.todos.push(todo)
        }
    }
}