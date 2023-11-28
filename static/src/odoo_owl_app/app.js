/** @odoo-module */

import { whenReady, mount } from "@odoo/owl";
import { templates } from "@web/core/assets";
import { Root } from "./root";

whenReady(() => mount(Root, document.querySelector('#root'), {
    templates,
}));