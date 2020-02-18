import { StockGrabber } from "./StockGrabber";
import { StockObserver } from "./StockObserver";
import { Observer } from "./Observer.interface";


const stockGrabberObject: StockGrabber = new StockGrabber();

const firstObserver: Observer = new StockObserver(stockGrabberObject);

stockGrabberObject.setIbmPrice(155);
stockGrabberObject.setAaplPrice(250);
stockGrabberObject.setGoogPrice(75);

const secondObserver: Observer = new StockObserver(stockGrabberObject);


stockGrabberObject.setIbmPrice(1000);
stockGrabberObject.setAaplPrice(2000);
stockGrabberObject.setGoogPrice(3000);

stockGrabberObject.unRegister(firstObserver);

stockGrabberObject.setIbmPrice(1);
stockGrabberObject.setAaplPrice(2);
stockGrabberObject.setGoogPrice(3);

