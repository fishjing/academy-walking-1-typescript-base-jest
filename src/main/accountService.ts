import {AccountBalance} from "./accountBalance";

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
