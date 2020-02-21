import { Topping } from "../AbstractDecorator/ToppingDecorator";
import { Pizza } from "src/AbstractComponent/Pizza";

export class TomatoSauce extends Topping {

  constructor(newPizza: Pizza) {
    super(newPizza); // this is a reference to PlainPizza object
    console.log('Adding TomatoSauce To Plain Pizza Created.')
  }
  getCost(): number {
    return this.tempPizza.getCost() + 0.3;
  }

  getDescription(): string {
    return this.tempPizza.getDescription() + ', TomatoSauce.'
  }
}