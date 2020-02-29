import { Dough } from "./interface/Dough";

export class ThinCrustDough implements Dough {
  private description: string;

  constructor () {
    this.description = 'Thin Crust Dough For NY Pizzas.'
  }

  setDesc(d: string): void {
    this.description = d;
  }
  getDesc(): string {
    return this.description;
  }

  
}