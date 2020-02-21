"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ToppingDecorator_1 = require("../AbstractDecorator/ToppingDecorator");
class TomatoSauce extends ToppingDecorator_1.Topping {
    constructor(newPizza) {
        super(newPizza); // this is a reference to PlainPizza object
        console.log('Adding TomatoSauce To Plain Pizza Created.');
    }
    getCost() {
        return this.tempPizza.getCost() + 0.3;
    }
    getDescription() {
        return this.tempPizza.getDescription() + ', TomatoSauce.';
    }
}
exports.TomatoSauce = TomatoSauce;
//# sourceMappingURL=TomatoSauce.js.map