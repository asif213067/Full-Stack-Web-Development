// Abstract Parent Class
abstract class Vehicle {
  // Concrete method (shared implementation)
  startEngine(): void {
    console.log("Engine started...");
  }

  // Abstract method (must be implemented by child)
  abstract calculateFare(distance: number): number;
}

class Car extends Vehicle {
  calculateFare(distance: number): number {
    return distance * 15; // Custom implementation
  }
}

const myCar = new Car();
myCar.startEngine(); // "Engine started..."
console.log(myCar.calculateFare(10)); // 150