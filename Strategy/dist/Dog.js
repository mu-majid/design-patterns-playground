"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = require("./Animal");
const FlyingBehavior_1 = require("./FlyingBehavior");
class Dog extends Animal_1.Animal {
    constructor() {
        super();
        this.flyingType = new FlyingBehavior_1.CantFly();
    }
}
exports.Dog = Dog;
//# sourceMappingURL=Dog.js.map