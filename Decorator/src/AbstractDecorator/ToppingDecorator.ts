import { Pizza } from "../AbstractComponent/Pizza";

export abstract class Topping extends Pizza {
  
  protected tempPizza: Pizza; // only accessible in same class and child classes

  constructor(newPizza: Pizza) {
    super();
    this.tempPizza = newPizza;
  }

  getDescription(): string {
    return this.tempPizza.getDescription();
  }

  getCost(): number {
    return this.tempPizza.getCost();
  }
}