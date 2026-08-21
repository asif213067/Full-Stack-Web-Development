class BankAccount {
  public readonly id: number;      // Read-only outside, can't be modified
  public name: string;             // Accessible anywhere
  private _balance: number;        // Hidden from outside access
  protected accountType: string;   // Accessible in child classes
  private _pin: number;

  constructor(id: number, name: string, balance: number, pin: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
    this.accountType = "Savings";
    this._pin = pin;
  }

  // Encapsulated method to safely update private data
  public deposit(amount: number): void {
    if (amount > 0) {
      this._balance += amount;
    }
  }

  getBalance(pin: number) {
    if(this._pin === pin)
        return this._balance;
    else
        return 'Enter your valid pin'
  }
}

const account = new BankAccount(101, "Asif", 5000, 1234);

account.deposit(2000);             // OK: Controlled modification
console.log(account.getBalance(1234)); // OK: Output -> 7000  || Enter your valid pin

// account._balance = 10000;       // ERROR: Property '_balance' is private
// account.id = 102;              // ERROR: Cannot assign to 'id' because it is read-only


// parameter property
// A parameter property is a constructor parameter carrying an access modifier, which TypeScript automatically declares as a field of the class and assigns from the argument passed in.

class IdCard {
  constructor(
    public name: string,
    public readonly roll: number,
    private pin: string,
  ) {}
}