import { EnemyRobot } from "src/Adaptee/EnemyRobot.impl";
import { EnemyAttacker } from "src/Target-Interface/EnemyAttacker.interface";

export class EnemyRobotAdapter implements EnemyAttacker {
    public theRobot: EnemyRobot;

    constructor (robot: EnemyRobot) {
        this.theRobot = robot;
    }

    fireWeapon(): void {
        this.theRobot.smashWithHands();
    }
    driveForward(): void {
        this.theRobot.walkForward();
    }
    assignDriver(driverName: string): void {
        this.theRobot.reactToHuman(driverName);
    }
    
}