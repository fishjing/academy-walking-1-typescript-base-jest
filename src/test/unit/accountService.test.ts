import { AccountService } from "../../main/accountService";
import { mock } from "jest-mock-extended";
import { AccountBalance } from "../../main/accountBalance";

describe("Bank Unit", () => {
  const accountBalance = mock<AccountBalance>();

  describe("When money is deposit into account", () => {
    it("should change the account balance", () => {
      const account = new AccountService(accountBalance);
      account.deposit(1000);

      expect(accountBalance.update).toBeCalledWith(1000);
    });
  });
  describe("When money is withdrawn from account", () => {
    it("should change the account balance", () => {
      const account = new AccountService(accountBalance);
      account.withdraw(1000);

      expect(accountBalance.update).toBeCalledWith(-1000);
    });
  });

  describe("When a statement is requested ", () => {
    it("should print the current statement", () => {
      const account = new AccountService(accountBalance);
      account.deposit(1000);
      account.withdraw(1000);
      account.printStatement();
      expect(accountBalance.exportStatement).toHaveBeenCalled();
    });
  });
});
