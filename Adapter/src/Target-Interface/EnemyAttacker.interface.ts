/**
 * This is what The client expects to deal with
 * And its the adapter job to make every class it works with compatible with this
 */

export interface EnemyAttacker {
  fireWeapon(): void;
  driveForward(): void;
  assignDriver(driverName: string): void;

}