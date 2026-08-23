class Student {
  static total = 0;
  name: string;

  constructor(name: string) {
    this.name = name;
    Student.total += 1;
  }

  static describe(): string {
    return `${Student.total} students admitted`;
  }
}

const rafi = new Student("Rafi");
const mim = new Student("Mim");

console.log(rafi.name, mim.name);
console.log(Student.total);
console.log(Student.describe());



// ==============   SOLID Principle =============

class Order {
    public items: { name: string; price: number }[] = [];

    constructor(public customerPhone: string) {}

    addItem(name: string, price: number): void {
        this.items.push({name, price});
    }

    subtotal(): number {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
}

class OrderValidator {
    isValid(order: Order): boolean {
        return order.items.length > 0  && order.customerPhone.length === 11;
    }

}


class TaxCalculator {
    constructor(public rate: number) {}

    taxFor(order: Order): number {
        return Math.round(order.subtotal() * this.rate)
    }

    totalFor(order: Order): number {
        return order.subtotal() + this.taxFor(order);
    }
}

class ReceiptPrinter {
    print(order: Order, tax: TaxCalculator): string {

        const itemLines = order.items
            .map(item => `${item.name} x${item.price}`)
            .join('\n');

        const total = tax.totalFor(order);

        return `RECEIPT\n${itemLines}\nTOTAL ${total}`;
    }
}


// 1. Setup Data & Instantiation
const order = new Order("01712345678"); // Valid 11-digit phone
order.addItem("cha", 10);
order.addItem("singara", 12);

const emptyOrder = new Order("01812345678"); // Empty items
const invalidPhoneOrder = new Order("017123"); // Short phone

const validator = new OrderValidator();
const taxCalc = new TaxCalculator(0.15); // 15% tax
const printer = new ReceiptPrinter();

// --- TEST CASES ---

// Test 1: Order Subtotal Calculation
console.log("--- Test 1: Order Subtotal ---");
console.log("Subtotal (Expected 22):", order.subtotal());

// Test 2: Order Validation
console.log("\n--- Test 2: Order Validation ---");
console.log("Valid Order (Expected true):", validator.isValid(order));
console.log("Empty Order (Expected false):", validator.isValid(emptyOrder));
console.log("Invalid Phone Order (Expected false):", validator.isValid(invalidPhoneOrder));

// Test 3: Tax Calculation
console.log("\n--- Test 3: Tax Calculator ---");
console.log("Tax Amount (Expected 3):", taxCalc.taxFor(order)); // 22 * 0.15 = 3.3 -> rounded to 3
console.log("Total Amount (Expected 25):", taxCalc.totalFor(order)); // 22 + 3 = 25

// Test 4: Receipt Printing
console.log("\n--- Test 4: Receipt Printing ---");
console.log(printer.print(order, taxCalc));
/*
Expected Output:
RECEIPT
cha x10
singara x12
TOTAL 25
*/