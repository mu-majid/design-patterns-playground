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
    this.sauce = this.ingredientsFactory.createSauce();
    this.cheese = this.ingredientsFactory.createCheese();
  }
  
}