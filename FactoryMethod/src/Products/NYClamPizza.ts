import { Pizza } from "./Interface/Pizza";

export class NYClamPizza extends Pizza {
  constructor () {
    super();
    this.name = 'NY Style Clam Pizza';
    this.dough = 'Thin Crust Dough';
    this.sauce = 'Marinara Sauce';
    this.toppings.push('Reggiano Cheese');
  }

}