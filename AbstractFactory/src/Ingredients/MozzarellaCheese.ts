import { Cheese } from "./interface/Cheese";

export class MozzarellaCheese implements Cheese {
  private description: string;

  constructor () {
    this.description = 'Mozzarella Cheese For Chicago Pizzas.'
  }

  setDesc(d: string): void {
    this.description = d;
  }
  getDesc(): string {
    return this.description;
  }

  
}