"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = require("../AbstractComponent/Pizza");
class PlainPizza extends Pizza_1.Pizza {
    getDescription() {
        return 'Thin Dough';
    }
    getCost() {
        return 3.5;
    }
}
exports.PlainPizza = PlainPizza;
//# sourceMappingURL=PlainPizza.js.map