"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StockGrabber_1 = require("./StockGrabber");
const StockObserver_1 = require("./StockObserver");
const stockGrabberObject = new StockGrabber_1.StockGrabber();
const firstObserver = new StockObserver_1.StockObserver(stockGrabberObject);
stockGrabberObject.setIbmPrice(155);
stockGrabberObject.setAaplPrice(250);
stockGrabberObject.setGoogPrice(75);
const secondObserver = new StockObserver_1.StockObserver(stockGrabberObject);
stockGrabberObject.setIbmPrice(1000);
stockGrabberObject.setAaplPrice(2000);
stockGrabberObject.setGoogPrice(3000);
stockGrabberObject.unRegister(firstObserver);
stockGrabberObject.setIbmPrice(1);
stockGrabberObject.setAaplPrice(2);
stockGrabberObject.setGoogPrice(3);
//# sourceMappingURL=main.js.map