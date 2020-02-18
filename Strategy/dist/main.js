"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dog_1 = require("./Dog");
const Bird_1 = require("./Bird");
const FlyingBehavior_1 = require("./FlyingBehavior");
const sparky = new Dog_1.Dog();
const tweety = new Bird_1.Bird();
console.log(sparky.tryToFly()); // I can't fly.
console.log(tweety.tryToFly()); // Flying High With Wings.
sparky.setFlyingBehavior(new FlyingBehavior_1.FlyWithWings());
console.log(sparky.tryToFly()); // Flying High With Wings.
//# sourceMappingURL=main.js.map