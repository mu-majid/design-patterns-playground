import { Command } from "../interfaces/Command.interface";
import { RecieverDevice } from "../interfaces/RecieverDevice.interface";
import { Television } from "../Recievers/Television";

export class TelevisionRemote {
  
  public static getDevice(): RecieverDevice {
    return new Television();
  }
}