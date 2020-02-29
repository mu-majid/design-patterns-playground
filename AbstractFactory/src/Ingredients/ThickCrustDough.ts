import { Dough } from "./interface/Dough";

export class ThickCrustDough implements Dough {
  private description: string;

  constructor () {
    this.description = 'Thick Crust Dough For Chicago Pizzas.'
  }

  setDesc(d: string): void {
    this.description = d;
  }
  getDesc(): string {
    return this.description;
  }

  
}