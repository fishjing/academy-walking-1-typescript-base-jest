import { AccountService } from "../main/accountService";

describe("Bank Accptance", () => {
  it("It should display the current bank statement", () => {
    // Given a client makes a deposit of 1000 on 10-01-2012
    const account = new AccountService();
    account.deposit(1000);

    // And a deposit of 2000 on 13-01-2012
    account.deposit(2000);
    // And a withdrawal of 500 on 14-01-2012
    account.withdraw(500);

    // When they print their bank statement, Then they should see
    expect(account.printStatement()).toBe(`
          Date       || Amount || Balance
          14/01/2012 || -500   || 2500
          13/01/2012 || 2000   || 3000
          10/01/2012 || 1000   || 1000
    `);
  });
});
