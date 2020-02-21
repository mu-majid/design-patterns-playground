import { PlainPizza } from "./ConcreteComponents/PlainPizza";
import { Mozzarella } from "./ConcreteDecorator/Mozzerlla";
import { Pizza } from "./AbstractComponent/Pizza";
import { TomatoSauce } from "./ConcreteDecorator/TomatoSauce";

let pizzaOne: Pizza = new PlainPizza();

// add Moz.
pizzaOne = new Mozzarella(pizzaOne);

// add tomato sauce
pizzaOne = new TomatoSauce(pizzaOne);

console.log('Pizza Desc : ', pizzaOne.getDescription()); // Thin Dough, Mozzarella, TomatoSauce
console.log('Pizza Cost : ', pizzaOne.getCost()); // 4.3