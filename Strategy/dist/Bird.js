"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = require("./Animal");
const FlyingBehavior_1 = require("./FlyingBehavior");
class Bird extends Animal_1.Animal {
    constructor() {
        super();
        this.flyingType = new FlyingBehavior_1.FlyWithWings();
    }
}
exports.Bird = Bird;
//# sourceMappingURL=Bird.js.map