
import { Flys  } from "./Flys_Interface";


export class CantFly implements Flys {

  public fly(): string {
    return 'I can\'t fly.';
  }
}