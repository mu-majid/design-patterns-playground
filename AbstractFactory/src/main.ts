import { NYStyleStore } from "./Stores/NYStyleStore";
import { PizzaStore } from "./Stores/interface/PizzaStore";
import { Pizza } from "./Products/interface/Pizza";
import { ChicagoStyleStore } from "./Stores/ChicagoStyleStore";


const nyStore: PizzaStore = new NYStyleStore();
const chicagoStore: PizzaStore = new ChicagoStyleStore();

let pizza: Pizza | null = nyStore.orderPizza('cheese');
console.log('NY Pizza : ', pizza ? pizza.getName() : 'Null Returned.');


pizza = chicagoStore.orderPizza('clam');
console.log('Chicago Pizza : ', pizza ? pizza.getName() : 'Null Returned.');
