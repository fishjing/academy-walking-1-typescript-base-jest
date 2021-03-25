export class AccountBalance{
    balance:number;
    constructor() {
        this.balance=0;
    }
    update(amount:number):void{
        this.balance+=amount;
    }

    exportStatement():string {
        return 'Not implemented';
    }


}