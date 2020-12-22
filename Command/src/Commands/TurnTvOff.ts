import { Command } from "../interfaces/Command.interface";
import { RecieverDevice } from "../interfaces/RecieverDevice.interface";

export class TurnTvOff implements Command {

  theDevice: RecieverDevice;

  constructor(newDevice: RecieverDevice) {
    this.theDevice = newDevice;
  }
  undo(): void {
    this.theDevice.on();

  }

  execute(): void {
    this.theDevice.off();
  }

}