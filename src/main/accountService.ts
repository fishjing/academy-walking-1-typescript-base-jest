import {AccountBalance} from "./accountBalance";

export class AccountService {

  accountBalance:AccountBalance
  constructor(accountBalance:AccountBalance) {
    this.accountBalance=accountBalance
  }

  deposit(amount: number): void {
    this.accountBalance.update(amount)
  }
  withdraw(amount: number): void {
    this.accountBalance.update(-amount)
  }
  printStatement(): void {
    this.accountBalance.exportStatement()
  }
}
