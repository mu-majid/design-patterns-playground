import { PizzaStore } from "./AbstractPizzaStore";
import { Pizza } from "../Products/Interface/Pizza";
import { ChicagoCheesePizza } from "../Products/ChicagoCheesePizza";
import { ChicagoClamPizza } from "../Products/ChicagoClamPizza";


export class ChicagoPizzaStore extends PizzaStore {
  public createPizza(item: string ): Pizza | null {
    if (item === 'cheese') {
      return new ChicagoCheesePizza();
    }
    else if (item === 'clam') {
      return new ChicagoClamPizza();
    }
    else{ 
      return null
    };
  }
}