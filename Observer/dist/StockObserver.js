"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StockObserver {
    constructor(stockGrabber) {
        this.stockGrabber = stockGrabber;
        this.observerID = ++StockObserver.observerIDTracker;
        console.log('Observer Created ', this.observerID);
        this.stockGrabber.register(this);
    }
    update(ibmPrice, aaplPrice, googPrice) {
        this.aaplPrice = aaplPrice;
        this.googPrice = googPrice;
        this.ibmPrice = ibmPrice;
        this.printPrices();
    }
    printPrices() {
        console.log(`Observer ${this.observerID} has the following Prices :\nIBM: ${this.ibmPrice}\nAAPL: ${this.aaplPrice}\nGOOG: ${this.googPrice}`);
    }
}
exports.StockObserver = StockObserver;
StockObserver.observerIDTracker = 0;
//# sourceMappingURL=StockObserver.js.map