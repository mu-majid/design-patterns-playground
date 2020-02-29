import { Pizza } from "./Interface/Pizza";

export class ChicagoCheesePizza extends Pizza {
  constructor () {
    super();
    this.name = 'Chicago Style Deep Dish Cheese Pizza';
    this.dough = 'Extra Thick Crust Dough';
    this.sauce = 'Plum Tomato Sauce';
    this.toppings.push('Shredded Mozzarella Cheese');
  }

  public cut(): void {
    console.log('Cutting Chicago Pizza Into Square Slices.');
  }
}