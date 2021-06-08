import { EnemyAttacker } from "./EnemyAttacker.interface";

export class EnemyTank implements EnemyAttacker {
    fireWeapon(): void {
        const randomDamage = Math.floor(Math.random() * 10) + 1;
        console.log(`Enemy Tank Caused ${randomDamage} Damage Points.`);
    }
    driveForward(): void {
        const randomMovement = Math.floor(Math.random() * 5) + 1;
        console.log(`Enemy Tank Moved ${randomMovement}.`);
    }
    assignDriver(driverName: string): void {
        console.log(`Driver ${driverName} is assigned to Enemy Tank.`)
    }
    
}