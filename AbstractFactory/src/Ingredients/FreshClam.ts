import { Clam } from "./interface/Clam";

export class FreshClam implements Clam {
  private description: string;

  constructor () {
    this.description = 'Fresh Clam For NY Pizzas.'
  }

  setDesc(d: string): void {
    this.description = d;
  }
  getDesc(): string {
    return this.description;
  }

  
}