import { Pepperoni } from "./interface/Pepperoni";

export class SlicedPepperoni implements Pepperoni {
  private description: string;

  constructor () {
    this.description = 'Sliced Pepperoni For NY/Chicago Pizzas.'
  }

  setDesc(d: string): void {
    this.description = d;
  }
  getDesc(): string {
    return this.description;
  }

  
}