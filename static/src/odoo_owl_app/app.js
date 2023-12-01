/** @odoo-module */

import { whenReady, } from "@odoo/owl";
import { mountComponent } from "@web/env";
import { templates } from "@web/core/assets";
import { Root } from "./root";

whenReady(() => mountComponent(Root, document.querySelector('#root'), {
    templates,
    dev: true,
    name: "Owl Demo App",
}));