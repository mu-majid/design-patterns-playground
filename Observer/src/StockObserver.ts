import { Observer } from "./Observer.interface";
import { Subject } from "./Publisher.interface";


export class StockObserver implements Observer {
  private aaplPrice: Number;
  private googPrice: Number;
  private ibmPrice: Number;

  private stockGrabber: Subject;

  public observerID: Number;
  private static observerIDTracker = 0;

  constructor(stockGrabber: Subject) {
    this.stockGrabber = stockGrabber;
    this.observerID = ++StockObserver.observerIDTracker;

    console.log('Observer Created ', this.observerID);
    this.stockGrabber.register(this);
  }

  public update(ibmPrice: Number, aaplPrice: Number, googPrice: Number): void {
    this.aaplPrice = aaplPrice;
    this.googPrice = googPrice;
    this.ibmPrice = ibmPrice;
    this.printPrices();
  }

  private printPrices (): void {
    console.log(
      `Observer ${this.observerID} has the following Prices :\nIBM: ${this.ibmPrice}\nAAPL: ${this.aaplPrice}\nGOOG: ${this.googPrice}`
    );
  }

}