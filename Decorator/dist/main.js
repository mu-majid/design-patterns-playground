"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PlainPizza_1 = require("./ConcreteComponents/PlainPizza");
const Mozzerlla_1 = require("./ConcreteDecorator/Mozzerlla");
const TomatoSauce_1 = require("./ConcreteDecorator/TomatoSauce");
let pizzaOne = new PlainPizza_1.PlainPizza();
// add Moz.
pizzaOne = new Mozzerlla_1.Mozzarella(pizzaOne);
// add tomato sauce
pizzaOne = new TomatoSauce_1.TomatoSauce(pizzaOne);
console.log('Pizza Desc : ', pizzaOne.getDescription()); // Thin Dough, Mozzarella, TomatoSauce
console.log('Pizza Cost : ', pizzaOne.getCost()); // 4.3
//# sourceMappingURL=main.js.map