import { Cheese } from "./interface/Cheese";

export class ReggianoCheese implements Cheese {
  private description: string;

  constructor () {
    this.description = 'Reggiano Cheese For NY Pizzas.'
  }

  setDesc(d: string): void {
    this.description = d;
  }
  getDesc(): string {
    return this.description;
  }

  
}