import { Pizza } from "../Products/Interface/Pizza";

export abstract class PizzaStore {
  
  public orderPizza (type: string): Pizza | null {
    let pizza: Pizza | null;

    pizza = this.createPizza(type);
    if (pizza) {
      pizza.prepare();
      pizza.bake();
      pizza.cut();
      pizza.box();
  
      return pizza;
    }
    else {
      return null;
    }
  }

  public abstract createPizza(type: string): Pizza | null;
}