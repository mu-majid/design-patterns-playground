import { Command } from "../interfaces/Command.interface";

export class DeviceButton {
  theCommand: Command;

  constructor(newCommand: Command) {
    this.theCommand = newCommand;
  }

  public press() {
    this.theCommand.execute();
  }

  public undo() {
    this.theCommand.undo();
  }
}