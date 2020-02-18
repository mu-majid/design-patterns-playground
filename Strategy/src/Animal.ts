import { Flys } from "./FlyingBehavior";


export class Animal {
  public flyingType: Flys;

  public tryToFly(): string {
    return this.flyingType.fly();
  }

  public setFlyingBehavior(newFlyingBehavior: Flys): void {
    this.flyingType = newFlyingBehavior;
  }

}