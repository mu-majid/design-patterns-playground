import { Command } from "../interfaces/Command.interface";
import { RecieverDevice } from "../interfaces/RecieverDevice.interface";

export class TurnAllOff implements Command {

  devices: RecieverDevice[];

  constructor(devicesToControl: RecieverDevice[]) {
    this.devices = devicesToControl;
  }
  undo(): void {
    this.devices.forEach(d => {
      d.on();
    });
  }

  execute(): void {
    this.devices.forEach(d => {
      d.off();
    });
  }

}