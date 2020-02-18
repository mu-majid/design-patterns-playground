import { Animal } from "./Animal";
import { CantFly } from "./FlyingBehavior";


export class Dog extends Animal {

  constructor () {
    super();
    this.flyingType = new CantFly();
  }

}