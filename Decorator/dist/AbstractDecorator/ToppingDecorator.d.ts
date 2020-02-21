import { Pizza } from "../AbstractComponent/Pizza";
export declare abstract class Topping extends Pizza {
    protected tempPizza: Pizza;
    constructor(newPizza: Pizza);
    getDescription(): string;
    getCost(): number;
}
//# sourceMappingURL=ToppingDecorator.d.ts.map