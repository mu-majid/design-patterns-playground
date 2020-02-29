import { Dough } from "src/Ingredients/interface/Dough";
import { Sauce } from "src/Ingredients/interface/Sauce";
import { Cheese } from "src/Ingredients/interface/Cheese";
import { Pepperoni } from "src/Ingredients/interface/Pepperoni";
import { Clam } from "src/Ingredients/interface/Clam";

export interface AbstractPizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createPepperoni(): Pepperoni;
  createClam(): Clam;
}