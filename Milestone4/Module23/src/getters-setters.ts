class BkashAccount {
    public readonly phone: string;
    private pin: string;
    private _balance: number;

    constructor (phone: string, pin: string, opening: number = 0) {
        this.phone = phone;
        this.pin = pin;
        this._balance = opening;
    }

    get balance() {
        return this._balance;
    }

    set balance(value: number) {
        if (value < 0) {
            return;
        }
        this._balance = value;
    }

    get status(): string {
        if(this._balance === 0)
            return "empty";

        if(this._balance < 100)
            return "low";

        return "fine";
    }

    cashIn(amount: number): boolean {
        if(amount <= 0) return false;
        this._balance += amount;
        return true;
    }

    sendMoney(amount: number, pin: string): string{
        if(this.pin !== pin) return "Wrong PIN";

        if(amount <= 0) return "Invalid amount";

        if(this._balance < amount) return "Insufficient balance";

        this._balance -= amount;
        return "Sent";
    }
}


const acc = new BkashAccount("01711111111", "1234", 500);
console.log(acc.balance, acc.status);

acc.balance = 50;
console.log(acc.balance, acc.status);