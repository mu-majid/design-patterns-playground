import { Flys  } from "./Flys_Interface";


export class FlyWithWings implements Flys {

  public fly(): string {
    return 'Flying High With Wings.';
  }
}