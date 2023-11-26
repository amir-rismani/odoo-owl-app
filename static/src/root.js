/** @odoo-module */

import { Component, useState } from "@odoo/owl";
import { WebsiteLayout } from "./layouts/website/layout"
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
{
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "is_completed": true
},
{
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "is_completed": false
},
{
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "is_completed": false
},
{
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "is_completed": false
},
{
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "is_completed": true
},
{
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "is_completed": false
},
{
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "is_completed": true
},]
export class Root extends Component {
    static template = "odoo_owl_app.Root";
    static components = { WebsiteLayout };
    static props = {};
}