import { Singleton } from "./Singleton";

const inst = Singleton.getInstance();

const newInst = Singleton.getInstance();

console.log(inst === newInst);


