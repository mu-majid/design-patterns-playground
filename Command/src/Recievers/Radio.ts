import { RecieverDevice } from "../interfaces/RecieverDevice.interface";

export class Radio implements RecieverDevice {
  private volume: number = 0;

  on(): void {
    console.log('Radio (Reciever) on')
  }
  off(): void {
    console.log('Radio (Reciever) off')
  }
  volumeUp(): void {
    this.volume = this.volume + 1;
    console.log('Radio (Reciever) vol up ', this.volume)
  }
  volumeDown(): void {
    this.volume = this.volume - 1;
    console.log('Radio (Reciever) vol down', this.volume)
  }

}