import { PizzaStore } from "./interface/PizzaStore";
import { Pizza } from "src/Products/interface/Pizza";
import { ChicagoIngredientsFactory } from "src/Factories/ChicagoIngredsFactory";
import { AbstractPizzaIngredientFactory } from "src/Factories/AbstractFactory";
import { CheesePizza } from "src/Products/CheesePizza";
import { ClamPizza } from "src/Products/ClamPizza";
import { PepperoniPizza } from "src/Products/PepperoniPizza";

export class ChicagoStyleStore extends PizzaStore {
  public createPizza(type: string): Pizza | null {

    const ingredsFactory: AbstractPizzaIngredientFactory =  new ChicagoIngredientsFactory();
    let pizza: Pizza | null;
    
    if (type === 'cheese') {
      pizza = new CheesePizza(ingredsFactory);
      pizza.setName('Chicago Style Cheese Pizza.');
    }
    else if (type === 'clam') {
      pizza = new ClamPizza(ingredsFactory);
      pizza.setName('Chicago Style Clam Pizza.');
    }
    else if (type === 'pepperoni') {
      pizza = new PepperoniPizza(ingredsFactory);
      pizza.setName('Chicago Style Pepperoni Pizza.');
    }
    else {
      pizza = null;
    }

    return pizza;
  }
  
}