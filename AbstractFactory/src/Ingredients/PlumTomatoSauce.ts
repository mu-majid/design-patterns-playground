import { Sauce } from "./interface/Sauce";

export class PlumTomatoSauce implements Sauce {
  private description: string;

  constructor () {
    this.description = 'Plum Tomato Sauce For Chicago Pizzas.'
  }

  setDesc(d: string): void {
    this.description = d;
  }
  getDesc(): string {
    return this.description;
  }

  
}