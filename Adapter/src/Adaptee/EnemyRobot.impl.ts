export class EnemyRobot {
    smashWithHands(): void {
        const randomDamage = Math.floor(Math.random() * 10) + 1;
        console.log(`Enemy Robot Caused ${randomDamage} Damage Points With its Hands.`);
    }
    walkForward(): void {
        const randomMovement = Math.floor(Math.random() * 5) + 1;
        console.log(`Enemy Robot Walked ${randomMovement}.`);
    }
    reactToHuman(driverName: string): void {
        console.log(`Robot tramps on ${driverName}.`)
    }
}