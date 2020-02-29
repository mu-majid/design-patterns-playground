import { AbstractPizzaIngredientFactory } from "./AbstractFactory";
import { ThickCrustDough } from "src/Ingredients/ThickCrustDough";
import { PlumTomatoSauce } from "src/Ingredients/PlumTomatoSauce";
import { MozzarellaCheese } from "src/Ingredients/MozzarellaCheese";
import { SlicedPepperoni } from "src/Ingredients/SlicedPepperoni";
import { FrozenClam } from "src/Ingredients/FrozenClam";

export class ChicagoIngredientsFactory implements AbstractPizzaIngredientFactory {
  createDough() {
    return new ThickCrustDough();
  } 
  createSauce() {
    return new PlumTomatoSauce();
  }
  createCheese() {
    return new MozzarellaCheese();
  }
  createPepperoni() {
    return new SlicedPepperoni(); // used for chicago as well
  }
  createClam() {
    return new FrozenClam();
  }
}