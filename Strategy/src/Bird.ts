import { Animal } from "./Animal";
import { FlyWithWings } from "./FlyingBehavior";


export class Bird extends Animal {

  constructor () {
    super();
    this.flyingType = new FlyWithWings();
  }

}