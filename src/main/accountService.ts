export class AccountService {

  accountBalance:AccountBalance
  constructor(accountBalance:AccountBalance) {
    this.accountBalance=accountBalance
  }

  deposit(amount: number): void {
    this.accountBalance.deposit(amount)
  }
  withdraw(amount: number): void {
    throw "Not implement";
  }
  printStatement(): string {
    throw "Not implement";
  }
}

export class AccountBalance{
  balance:number;
  constructor() {
    this.balance=0;
  }
  deposit(amount:number):void{
    this.balance+=amount;
  }
}
