import {AccountBalance, AccountService} from "../main/accountService";
import {mock} from "jest-mock-extended";

describe ("Bank Unit",()=>{
    describe("When money is deposit into account",()=>{
        const accountBalance= mock<AccountBalance>();
        it("should change the account balance",()=>{

            const account = new AccountService(accountBalance);
            account.deposit(1000);

            expect(accountBalance.deposit).toBeCalledWith(1000)
        })
    })
})