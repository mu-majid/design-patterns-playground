import { Pizza } from "./interface/Pizza";
import { AbstractPizzaIngredientFactory } from "src/Factories/AbstractFactory";

export class PepperoniPizza extends Pizza {
  private ingredientsFactory: AbstractPizzaIngredientFactory;

  constructor (ingredientsFactory: AbstractPizzaIngredientFactory) {
    super();
    this.ingredientsFactory = ingredientsFactory;
  }

  prepare(): void {
    console.log('Preparing ' + this.getName());
    
    this.dough = this.ingredientsFactory.createDough();
    console.log('Added dough ', this.dough.getDesc());

    this.sauce = this.ingredientsFactory.createSauce();
    console.log('Added sauce ', this.sauce.getDesc());

    this.pepperoni = this.ingredientsFactory.createPepperoni();
    console.log('Added pepperoni ', this.pepperoni.getDesc());

  }
  
}