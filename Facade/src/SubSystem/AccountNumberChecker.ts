export class AccountNumberCheck {

    private accountNumber: number = 12345678;

    public getAccountNumber(): number { return this.accountNumber; }

    public accountActive(acctNumToCheck: number): boolean {

        if (acctNumToCheck === this.getAccountNumber()) {
            return true;
        }
        else {
            return false;
        }
    }
}