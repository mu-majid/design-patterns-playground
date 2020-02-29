import { AbstractPizzaIngredientFactory } from "./AbstractFactory";
import { ThinCrustDough } from "src/Ingredients/ThinCrustDough";
import { MarinaraSauce } from "src/Ingredients/MarinaraSauce";
import { ReggianoCheese } from "src/Ingredients/ReggianoCheese";
import { SlicedPepperoni } from "src/Ingredients/SlicedPepperoni";
import { FreshClam } from "src/Ingredients/FreshClam";

export class NYIngredientsFactory implements AbstractPizzaIngredientFactory {
  createDough() {
    return new ThinCrustDough();
  } 
  createSauce() {
    return new MarinaraSauce();
  }
  createCheese() {
    return new ReggianoCheese();
  }
  createPepperoni() {
    return new SlicedPepperoni(); // used for chicago as well
  }
  createClam() {
    return new FreshClam();
  }
}