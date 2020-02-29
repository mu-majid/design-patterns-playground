import { Sauce } from "./interface/Sauce";

export class MarinaraSauce implements Sauce {
  private description: string;

  constructor () {
    this.description = 'Marinara Sauce For NY Pizzas.'
  }

  setDesc(d: string): void {
    this.description = d;
  }
  getDesc(): string {
    return this.description;
  }

  
}