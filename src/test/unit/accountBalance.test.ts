import { AccountBalance } from "../../main/accountBalance";
var MockDate = require("mockdate");

describe("AccountBalance", () => {
  afterAll(() => {
    MockDate.reset();
  });
  it("Should increse the balance after update with positive amount", () => {
    const balance = new AccountBalance();
    balance.update(1000);
    balance.update(1000);
    expect(balance.getBalance()).toBe(2000);
  });

  it("Should decrease the balance after update with negative amount", () => {
    const balance = new AccountBalance();
    balance.update(1000);
    balance.update(-1500);
    expect(balance.getBalance()).toBe(-500);
  });

  it("Should exportStatement with empty history when no updates", () => {
    const balance = new AccountBalance();
    expect(balance.exportStatement()).toBe(`
      Date || Amount || Balance
    `);
  });

  it("Should exportStatement with 1 history when 1 update", () => {
    const balance = new AccountBalance();
    balance.update(1000);
    MockDate.set(1616671870000);
    expect(balance.exportStatement()).toBe(`
      Date || Amount || Balance
      25/03/2021 || 1000   || 1000
    `);
  });
});
