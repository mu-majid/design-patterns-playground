"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StockGrabber {
    constructor() {
        this.observersArr = [];
    }
    register(o) {
        this.observersArr.push(o);
    }
    unRegister(o) {
        this.observersArr = this.observersArr.filter((obs) => obs !== o);
        console.log('Deleted Observer ', o.observerID);
    }
    notifyObservers() {
        for (let index = 0; index < this.observersArr.length; index++) {
            const observer = this.observersArr[index];
            observer.update(this.ibmPrice, this.aaplPrice, this.googPrice);
        }
    }
    setIbmPrice(price) {
        this.ibmPrice = price;
        this.notifyObservers();
    }
    setAaplPrice(price) {
        this.aaplPrice = price;
        this.notifyObservers();
    }
    setGoogPrice(price) {
        this.googPrice = price;
        this.notifyObservers();
    }
}
exports.StockGrabber = StockGrabber;
//# sourceMappingURL=StockGrabber.js.map