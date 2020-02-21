import { Topping } from "../AbstractDecorator/ToppingDecorator";
import { Pizza } from "src/AbstractComponent/Pizza";

export class Mozzarella extends Topping {

  constructor(newPizza: Pizza) {
    super(newPizza); // this is a reference to PlainPizza object
    console.log('Adding Mozzarella To Plain Pizza Created.')
  }
  getCost(): number {
    return this.tempPizza.getCost() + 0.5;
  }

  getDescription(): string {
    return this.tempPizza.getDescription() + ', Mozzarella.'
  }
}