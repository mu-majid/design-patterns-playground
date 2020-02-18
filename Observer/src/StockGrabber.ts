import { Subject } from "./Publisher.interface";
import { Observer } from "./Observer.interface";
export class StockGrabber implements Subject {

  private observersArr: Array<Observer>;
  private ibmPrice: Number;
  private googPrice: Number;
  private aaplPrice: Number;

  constructor () {
    this.observersArr = [];
  }

  register(o: Observer): void {
    this.observersArr.push(o);
  } 
  
  unRegister(o: Observer): void {
    this.observersArr = this.observersArr.filter((obs) => obs !== o);
    console.log('Deleted Observer ', o.observerID);
    
  }
  notifyObservers(): void {
    for (let index = 0; index < this.observersArr.length; index++) {
      const observer = this.observersArr[index];
      observer.update(this.ibmPrice, this.aaplPrice, this.googPrice);
      
    }
  }

  setIbmPrice (price: Number): void {
    this.ibmPrice = price;
    this.notifyObservers();
  }

  setAaplPrice (price: Number): void {
    this.aaplPrice = price;
    this.notifyObservers();
  }

  setGoogPrice (price: Number): void {
    this.googPrice = price;
    this.notifyObservers();
  }

  
} 