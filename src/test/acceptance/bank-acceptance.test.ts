import { AccountService } from "../../main/accountService";
import { AccountBalance } from "../../main/accountBalance";
import { AccountBalanceHistory } from "../../main/accountBalanceHistory";

describe("Bank Acceptance", () => {
  it("It should display the current bank statement", () => {
    // Given a client makes a deposit of 1000 on 10-01-2012
    const accountBalance = new AccountBalance();
    const account = new AccountService(accountBalance);
    const currentStatement = new AccountBalanceHistory();

    account.deposit(1000);

    // And a deposit of 2000 on 13-01-2012
    account.deposit(2000);
    // And a withdrawal of 500 on 14-01-2012
    account.withdraw(500);

    // When they print their bank statement, Then they should see
    account.printStatement();

    expect(currentStatement).toBe(`
          Date       || Amount || Balance
          14/01/2012 || -500   || 2500
          13/01/2012 || 2000   || 3000
          10/01/2012 || 1000   || 1000
    `);
  });
});
