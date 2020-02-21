"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ToppingDecorator_1 = require("../AbstractDecorator/ToppingDecorator");
class Mozzarella extends ToppingDecorator_1.Topping {
    constructor(newPizza) {
        super(newPizza); // this is a reference to PlainPizza object
        console.log('Adding Mozzarella To Plain Pizza Created.');
    }
    getCost() {
        return this.tempPizza.getCost() + 0.5;
    }
    getDescription() {
        return this.tempPizza.getDescription() + ', Mozzarella.';
    }
}
exports.Mozzarella = Mozzarella;
//# sourceMappingURL=Mozzerlla.js.map