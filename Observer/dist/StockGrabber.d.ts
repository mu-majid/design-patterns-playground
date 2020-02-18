import { Subject } from "./Publisher.interface";
import { Observer } from "./Observer.interface";
export declare class StockGrabber implements Subject {
    private observersArr;
    private ibmPrice;
    private googPrice;
    private aaplPrice;
    constructor();
    register(o: Observer): void;
    unRegister(o: Observer): void;
    notifyObservers(): void;
    setIbmPrice(price: Number): void;
    setAaplPrice(price: Number): void;
    setGoogPrice(price: Number): void;
}
//# sourceMappingURL=StockGrabber.d.ts.map