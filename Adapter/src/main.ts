import { EnemyRobot } from "./Adaptee/EnemyRobot.impl";
import { EnemyRobotAdapter } from "./Adapter/EnemyRobotAdapter.impl";
import { EnemyTank } from "./Target-Interface/EnemyTank.impl";

const leopard: EnemyTank = new EnemyTank();
const fredTheRobot: EnemyRobot = new EnemyRobot();
const robotAdapter: EnemyRobotAdapter = new EnemyRobotAdapter(fredTheRobot);


console.log('The Robot ... \n');

fredTheRobot.reactToHuman('Paul');
fredTheRobot.walkForward();
fredTheRobot.smashWithHands();

console.log('\nThe Tank ... \n');

leopard.assignDriver('Mark');
leopard.driveForward();
leopard.fireWeapon();

console.log('\nRobot Adapted To Tank \n');

robotAdapter.assignDriver('Hans');
robotAdapter.driveForward();
robotAdapter.fireWeapon();