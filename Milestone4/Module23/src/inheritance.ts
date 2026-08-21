// Parent Class (Base Class)
class Vehicle {
  constructor(public registration: string, public wheels: number) {}

  describe(): string {
    return `Vehicle ${this.registration} has ${this.wheels} wheels.`;
  }
}

// Child Class 1
class CNG extends Vehicle {
  constructor(registration: string, private flagDown: number) {
    super(registration, 3); // Calls the parent Vehicle constructor
  }

  fare(km: number): number {
    return this.flagDown + km * 12;
  }
}

// Child Class 2
class Bus extends Vehicle {
  constructor(registration: string, private stageRate: number) {
    super(registration, 6); // Calls the parent Vehicle constructor
  }

  fare(stages: number): number {
    return stages * this.stageRate;
  }
}

// Usage
const cng = new CNG("DHK-4411", 40);
console.log(cng.describe()); // Inherited method from Vehicle -> "Vehicle DHK-4411 has 3 wheels."
console.log(cng.fare(6));     // Child specific method -> 112