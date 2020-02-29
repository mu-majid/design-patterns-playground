import { Pizza } from "./Interface/Pizza";

export class ChicagoClamPizza extends Pizza {
  constructor () {
    super();
    this.name = 'Chicago Style Deep Dish Clam Pizza';
    this.dough = 'Extra Thick Crust Dough';
    this.sauce = 'Plum Tomato Sauce';
    this.toppings.push('Shredded Mozzarella Cheese');
    this.toppings.push('Smoked Salmon');
  }

  public cut(): void {
    console.log('Cutting Chicago Pizza Into Square Slices.');
  }
}