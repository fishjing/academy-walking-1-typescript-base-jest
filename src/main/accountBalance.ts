import { AccountBalanceHistory } from "./accountBalanceHistory";

interface History {
  date: number;
  amount: number;
  balance: number;
}

export class AccountBalance {
  balance: number;
  history: History[];

  constructor() {
    this.balance = 0;
    this.history = [];
  }

  update(amount: number): void {
    this.balance += amount;
    this.history.push({
      date: Date.now(),
      amount,
      balance: this.balance,
    });
  }

  exportStatement(): string {
    let statement = `
      Date || Amount || Balance
    `;

    this.history.forEach((history) => {
      const date = new Date(history.date);
      const formattedDate = `${date.getDate()}/0${
        date.getMonth() + 1
      }/${date.getFullYear()}`;

      statement += `  ${formattedDate} || ${history.amount}   || ${history.balance}
    `;
    });

    return statement;
  }

  getBalance(): number {
    return this.balance;
  }
}
