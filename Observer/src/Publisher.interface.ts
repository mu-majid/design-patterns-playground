import { Observer } from "./Observer.interface";

export interface Subject {
  register(newObs: Observer): void;
  unRegister(obs: Observer): void;
  notifyObservers(): void;
}