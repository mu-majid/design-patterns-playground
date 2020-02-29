import { Clam } from "./interface/Clam";

export class FrozenClam implements Clam {
  private description: string;

  constructor () {
    this.description = 'Frozen Clam For Chicago Pizzas.'
  }

  setDesc(d: string): void {
    this.description = d;
  }
  getDesc(): string {
    return this.description;
  }

  
}