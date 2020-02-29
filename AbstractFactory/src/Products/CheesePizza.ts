import { Pizza } from "./interface/Pizza";
import { AbstractPizzaIngredientFactory } from "src/Factories/AbstractFactory";

export class CheesePizza extends Pizza {
  private ingredientsFactory: AbstractPizzaIngredientFactory;

  constructor (ingredientsFactory: AbstractPizzaIngredientFactory) {
    super();
    this.ingredientsFactory = ingredientsFactory;
  }

  prepare(): void {
    console.log('Preparing ' + this.getName());
    
    this.dough = this.ingredientsFactory.createDough();
    console.log('Added Dough ', this.dough.getDesc());

    this.sauce = this.ingredientsFactory.createSauce();
    console.log('Added Sauce ', this.sauce.getDesc());

    this.cheese = this.ingredientsFactory.createCheese();
    console.log('Added Cheese ', this.cheese.getDesc());

  }
  
}