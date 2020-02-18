export interface Observer {
  observerID: Number;
  update(ibmPrice: Number, aaplPrice: Number, googPrice: Number): void;
}