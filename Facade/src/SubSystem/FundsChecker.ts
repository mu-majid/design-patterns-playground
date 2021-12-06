export class FundsCheck {
	
	private cashInAccount: number = 1000.00;
	
	public getCashInAccount(): number { return this.cashInAccount; }
	
	public decreaseCashInAccount(cashWithdrawn: number) { this.cashInAccount -= cashWithdrawn; }
	
	public increaseCashInAccount(cashDeposited: number) { this.cashInAccount += cashDeposited; }
	
	public haveEnoughMoney(cashToWithdrawal: number) {
		
		if(cashToWithdrawal > this.getCashInAccount()) {
			console.log("Error: You don't have enough money");
			console.log("Current Balance: " + this.getCashInAccount());
			
			return false;
			
		} else {
			this.decreaseCashInAccount(cashToWithdrawal);
			console.log("Withdrawal Complete: Current Balance is " + this.getCashInAccount());

			return true;
		}
	}
	
	public makeDeposit(cashToDeposit: number) {
		
		this.increaseCashInAccount(cashToDeposit);
		
		console.log("Deposit Complete: Current Balance is " + this.getCashInAccount());
	}
}