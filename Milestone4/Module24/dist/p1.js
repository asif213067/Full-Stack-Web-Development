"use strict";
// Problem 1 — Cinema Ticket Counter
// Concepts: function parameter types, return types, number, conditional logic
// Function name must be: getTicketPrice
Object.defineProperty(exports, "__esModule", { value: true });
// Scenario
// A cinema is building a ticketing system. The ticket price depends on the customer's age because children and senior citizens receive special pricing. You are responsible for creating the function that determines how much a customer should pay for a single ticket.
// Task
// Create a function named getTicketPrice. The function should receive the customer's age and return the appropriate ticket price.
// Pricing Rules
// Age
// Ticket Price
// Below 5
// 0
// 5–12
// 100
// 13–59
// 200
// 60 or above
// 120
// A child younger than 5 years old can enter for free.
// Function Requirement
// Accept the age as a number.
// Return the ticket price as a number.
// Correctly handle all age ranges.
// Starter Code
function getTicketPrice(age) {
    if (age < 5)
        return 0;
    if (age >= 5 && age <= 12)
        return 100;
    if (age >= 13 && age <= 59)
        return 200;
    return 120;
}
// Examples
console.log(getTicketPrice(3)); // 0
console.log(getTicketPrice(10)); // 100
console.log(getTicketPrice(25)); // 200
console.log(getTicketPrice(65)); // 120
// Problem 2 — Store Inventory Status
// Concepts: function types, number, string, conditional logic, boundary conditions
// Function name must be: getStockStatus
// Scenario
// An online store wants to show customers whether a product is available before they place an order. The inventory system stores the number of currently available units. Your job is to convert that number into a meaningful status message.
// Task
// Create a function named getStockStatus. The function receives the current stock quantity and returns a status string.
// Status Rules
// Stock
// Status
// 0
// "Out of Stock"
// 1–5
// "Almost Sold Out"
// 6–20
// "Available"
// More than 20
// "In Stock"
// Additional Requirement
// The function should return a string.
// Think carefully about boundary values such as:
// Starter Code
function getStockStatus(stock) {
    if (stock === 0)
        return "Out of Stock";
    if (stock >= 1 && stock <= 5)
        return "Almost Sold Out";
    if (stock >= 6 && stock <= 20)
        return "Available";
    return "In Stock";
}
// Example
// Examples
console.log(getStockStatus(0)); // "Out of Stock"
console.log(getStockStatus(3)); // "Almost Sold Out"
console.log(getStockStatus(12)); // "Available"
console.log(getStockStatus(50)); // "In Stock"
// Boundary values
console.log(getStockStatus(5)); // "Almost Sold Out"
console.log(getStockStatus(6)); // "Available"
console.log(getStockStatus(20)); // "Available"
console.log(getStockStatus(21)); // "In Stock"
function formatUserProfile(user) {
    return `${user.name} is ${user.age} years old and lives in ${user.city}.`;
}
// Example
console.log(formatUserProfile({ name: "Fahim", age: 22, city: "Dhaka" }));
function calculateCartTotal(products) {
    return products.reduce((sum, product) => {
        return sum + product.price;
    }, 0);
}
// Example
const products = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 },
];
// another example:
const products2 = [
    { name: "Book", price: 500 },
    { name: "Pen", price: 50 },
    { name: "Bag", price: 1200 },
];
//output
console.log(calculateCartTotal(products2)); // 1750
console.log(calculateCartTotal(products)); // 2600
function getStudentResult(student) {
    const { name, marks } = student;
    if (marks.length === 0)
        return { name, average: 0, result: "Failed" };
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const average = total / marks.length;
    return { name, average, result: average >= 40 ? "Passed" : "Failed" };
}
// Example
console.log(getStudentResult({ name: "Rafi", marks: [80, 75, 90, 85] }));
// another example:
console.log(getStudentResult({ name: "Nabil", marks: [30, 35, 40, 25] }));
function canEdit(role) {
    // if(role === "admin" || role === "editor")
    //     return true;
    // return false;
    return role === "admin" || role === "editor";
}
// Example
console.log(canEdit("admin")); // true
console.log(canEdit("editor")); // true
console.log(canEdit("viewer")); // false
function findProducts(products, category) {
    return products.filter((product) => product.category === category);
}
// Example
const products1 = [
    { name: "iPhone 15", price: 90000, category: "phone" },
    { name: "Galaxy S24", price: 85000, category: "phone" },
    { name: "MacBook Air", price: 120000, category: "laptop" },
    { name: "Dell XPS", price: 110000, category: "laptop" },
];
console.log(findProducts(products1, "phone"));
// returns the iPhone 15 and Galaxy S24 objects
console.log(findProducts(products1, "laptop"));
function getPatientStatus(patient) {
    if (patient.type === "emergency") {
        if (patient.emergencyLevel === 1)
            return "Critical emergency";
        if (patient.emergencyLevel === 2)
            return "Serious emergency";
        return "Moderate emergency";
    }
    return "General patient";
}
// Example
console.log(getPatientStatus({ name: "Rahim", age: 35, type: "general" }));
// "General patient"
console.log(getPatientStatus({
    name: "Karim",
    age: 60,
    type: "emergency",
    emergencyLevel: 1,
}));
// "Critical emergency"
console.log(getPatientStatus({
    name: "Hasan",
    age: 45,
    type: "emergency",
    emergencyLevel: 3,
}));
function processTransaction(balance, transaction) {
    if (transaction.type === "deposit") {
        return balance + transaction.amount;
    }
    if (transaction.type === "withdraw") {
        if (transaction.amount > balance) {
            return balance;
        }
        return balance - transaction.amount;
    }
    return balance;
}
// Example
console.log(processTransaction(5000, { type: "deposit", amount: 2000 }));
// 7000
console.log(processTransaction(5000, { type: "withdraw", amount: 2000 }));
// 3000
// insufficient balance:
console.log(processTransaction(5000, { type: "withdraw", amount: 7000 }));
// 5000  (unchanged)
//# sourceMappingURL=p1.js.map