export class AccountBalance{
    balance:number;
    constructor() {
        this.balance=0;
    }
    deposit(amount:number):void{
        this.balance+=amount;
    }
}