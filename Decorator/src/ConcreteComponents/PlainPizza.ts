import { Pizza } from "../AbstractComponent/Pizza";

export class PlainPizza extends Pizza {
  public getDescription(): string {
    return 'Thin Dough';
  } 
  
  public getCost(): number {
    return 3.5;
  }

  
}