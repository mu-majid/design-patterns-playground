// The Facade Design Pattern decouples or separates the client 
// from all of the sub components

import { AccountNumberCheck } from "./SubSystem/AccountNumberChecker";
import { DummyBank } from "./SubSystem/DummyBank";
import { FundsCheck } from "./SubSystem/FundsChecker";
import { SecurityCodeCheck } from "./SubSystem/SecurityCodeChecker";

// The Facades aim is to simplify interfaces so you don't have 
// to worry about what is going on under the hood

export class BankAccountFacade {

    private accountNumber: number;
    private securityCode: number;

    acctChecker: AccountNumberCheck;
    codeChecker: SecurityCodeCheck;
    fundChecker: FundsCheck;

    bankWelcome: DummyBank;

    constructor(newAcctNum: number, newSecCode: number) {

        this.accountNumber = newAcctNum;
        this.securityCode = newSecCode;

        this.bankWelcome = new DummyBank();

        this.acctChecker = new AccountNumberCheck();
        this.codeChecker = new SecurityCodeCheck();
        this.fundChecker = new FundsCheck();

    }

    public getAccountNumber(): number { return this.accountNumber; }

    public getSecurityCode(): number { return this.securityCode; }


    public withdrawCash(cashToGet: number) {
        if (
            this.acctChecker.accountActive(this.getAccountNumber()) &&
            this.codeChecker.isCodeCorrect(this.getSecurityCode()) &&
            this.fundChecker.haveEnoughMoney(cashToGet)
        ) {
            console.log("Transaction Complete\n");
        } else {
            console.log("Transaction Failed\n");
        }
    }


    public depositCash(cashToDeposit: number) {
        if (
            this.acctChecker.accountActive(this.getAccountNumber()) &&
            this.codeChecker.isCodeCorrect(this.getSecurityCode())
        ) {
            this.fundChecker.makeDeposit(cashToDeposit);
            console.log("Transaction Complete\n");

        } else {
            console.log("Transaction Failed\n");
        }
    }
}