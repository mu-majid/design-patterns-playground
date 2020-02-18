import { Dog } from "./Dog";
import { Bird } from "./Bird";
import { Animal } from "./Animal";
import { FlyWithWings } from "./FlyingBehavior";

const sparky: Animal = new Dog();
const tweety: Animal = new Bird();

console.log(sparky.tryToFly()); // I can't fly.
console.log(tweety.tryToFly()); // Flying High With Wings.

sparky.setFlyingBehavior(new FlyWithWings());
console.log(sparky.tryToFly()); // Flying High With Wings.

