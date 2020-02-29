import { PizzaStore } from "./Factories/AbstractPizzaStore";
import { NYPizzaStore } from "./Factories/NYPizzaStore";
import { ChicagoPizzaStore } from "./Factories/ChicagoPizzaStore";
import { Pizza } from "./Products/Interface/Pizza";

const nyStore: PizzaStore = new NYPizzaStore();
const chicagoStore: PizzaStore = new ChicagoPizzaStore();

let pizza: Pizza | null = nyStore.orderPizza('cheese');
console.log('NY Pizza : ', pizza ? pizza.getname() : 'Null Returned.');


pizza = chicagoStore.orderPizza('cheese');
console.log('Chicago Pizza : ', pizza ? pizza.getname() : 'Null Returned.');
