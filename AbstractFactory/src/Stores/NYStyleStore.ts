import { PizzaStore } from "./interface/PizzaStore";
import { Pizza } from "src/Products/interface/Pizza";
import { AbstractPizzaIngredientFactory } from "src/Factories/AbstractFactory";
import { CheesePizza } from "src/Products/CheesePizza";
import { ClamPizza } from "src/Products/ClamPizza";
import { PepperoniPizza } from "src/Products/PepperoniPizza";
import { NYIngredientsFactory } from "src/Factories/NYIngredsFactory";

export class NYStyleStore extends PizzaStore {
  public createPizza(type: string): Pizza | null {

    const ingredsFactory: AbstractPizzaIngredientFactory =  new NYIngredientsFactory();
    let pizza: Pizza | null;
    
    if (type === 'cheese') {
      pizza = new CheesePizza(ingredsFactory);
      pizza.setName('NY Style Cheese Pizza.');
    }
    else if (type === 'clam') {
      pizza = new ClamPizza(ingredsFactory);
      pizza.setName('NY Style Clam Pizza.');
    }
    else if (type === 'pepperoni') {
      pizza = new PepperoniPizza(ingredsFactory);
      pizza.setName('NY Style Pepperoni Pizza.');
    }
    else {
      pizza = null;
    }

    return pizza;
  }
  
}