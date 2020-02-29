import { PizzaStore } from "./AbstractPizzaStore";
import { Pizza } from "../Products/Interface/Pizza";
import { NYCheesePizza } from "../Products/NYCheesePizza";
import { NYClamPizza } from "../Products/NYClamPizza";


export class NYPizzaStore extends PizzaStore {
  public createPizza(item: string ): Pizza | null {
    if (item === 'cheese') {
      return new NYCheesePizza();
    }
    else if (item === 'clam') {
      return new NYClamPizza();
    }
    else{ 
      return null
    };
  }
}