import { Command } from "../interfaces/Command.interface";
import { RecieverDevice } from "../interfaces/RecieverDevice.interface";

export class TurnTvOn implements Command {

  theDevice: RecieverDevice;

  constructor(newDevice: RecieverDevice) {
    this.theDevice = newDevice;
  }
  undo(): void {
    this.theDevice.off();

  }

  execute(): void {
    this.theDevice.on();
  }

}