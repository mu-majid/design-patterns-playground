"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    tryToFly() {
        return this.flyingType.fly();
    }
    setFlyingBehavior(newFlyingBehavior) {
        this.flyingType = newFlyingBehavior;
    }
}
exports.Animal = Animal;
//# sourceMappingURL=Animal.js.map