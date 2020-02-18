import { Observer } from "./Observer.interface";
import { Subject } from "./Publisher.interface";
export declare class StockObserver implements Observer {
    private aaplPrice;
    private googPrice;
    private ibmPrice;
    private stockGrabber;
    observerID: Number;
    private static observerIDTracker;
    constructor(stockGrabber: Subject);
    update(ibmPrice: Number, aaplPrice: Number, googPrice: Number): void;
    private printPrices;
}
//# sourceMappingURL=StockObserver.d.ts.map