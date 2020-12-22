import { Command } from "../interfaces/Command.interface";
import { RecieverDevice } from "../interfaces/RecieverDevice.interface";

export class TvVolUp implements Command {

  theDevice: RecieverDevice;

  constructor(newDevice: RecieverDevice) {
    this.theDevice = newDevice;
  }
  undo(): void {
    this.theDevice.volumeDown();

  }

  execute(): void {
    this.theDevice.volumeUp();
  }

  

}