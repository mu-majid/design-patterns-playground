export class SecurityCodeCheck {
	
	private  securityCode: number = 1234;
	
	public  getSecurityCode(): number { return this.securityCode; }
	
	public isCodeCorrect(secCodeToCheck: number): boolean{
		
		if(secCodeToCheck === this.getSecurityCode()) {
			return true;
		}
        else {
			return false;
		}
	}
}