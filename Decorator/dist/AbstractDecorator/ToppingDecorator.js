"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = require("../AbstractComponent/Pizza");
class Topping extends Pizza_1.Pizza {
    constructor(newPizza) {
        super();
        this.tempPizza = newPizza;
    }
    getDescription() {
        return this.tempPizza.getDescription();
    }
    getCost() {
        return this.tempPizza.getCost();
    }
}
exports.Topping = Topping;
//# sourceMappingURL=ToppingDecorator.js.map