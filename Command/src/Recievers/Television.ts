import { RecieverDevice } from "../interfaces/RecieverDevice.interface";

export class Television implements RecieverDevice {
  private volume: number = 0;

  on(): void {
    console.log('Television (Reciever) on')
  }
  off(): void {
    console.log('Television (Reciever) off')
  }
  volumeUp(): void {
    this.volume = this.volume + 1;
    console.log('Television (Reciever) vol up ', this.volume)
  }
  volumeDown(): void {
    this.volume = this.volume - 1;
    console.log('Television (Reciever) vol down ', this.volume)
  }

}