import { Pizza } from "./Interface/Pizza";

export class NYCheesePizza extends Pizza {
  constructor () {
    super();
    this.name = 'NY Style Cheese Pizza';
    this.dough = 'Thin Crust Dough';
    this.sauce = 'Marinara Sauce';
    this.toppings.push('Reggiano Cheese');
  }

}