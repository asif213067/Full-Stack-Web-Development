// Problem 1 — Cinema Ticket Counter
// Concepts: function parameter types, return types, number, conditional logic
// Function name must be: getTicketPrice

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
function getTicketPrice(age: number): number {

    if(age < 5) return 0;
 
    if(age >= 5 && age <= 12) return 100;

    if(age >= 13 && age <= 59) return 200;

    return 120;
}

// Examples
console.log(getTicketPrice(3));  // 0
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
function getStockStatus(stock: number): string{
    if(stock === 0) return "Out of Stock";
    if(stock >= 1 && stock <= 5) return "Almost Sold Out";
    if(stock >= 6 && stock <=20) return "Available";
    return "In Stock"
}

// Example
// Examples
console.log(getStockStatus(0));  // "Out of Stock"
console.log(getStockStatus(3));  // "Almost Sold Out"
console.log(getStockStatus(12)); // "Available"
console.log(getStockStatus(50)); // "In Stock"

// Boundary values
console.log(getStockStatus(5));  // "Almost Sold Out"
console.log(getStockStatus(6));  // "Available"
console.log(getStockStatus(20)); // "Available"
console.log(getStockStatus(21)); // "In Stock"




// Problem 3 — Social Media Profile Formatter
// Concepts: object types, type/interface, function parameter typing, return types, template literals
// Function name must be: formatUserProfile
// Scenario
// A social media application stores basic information about its users. The application needs a function that converts a user's structured data into a human-readable profile summary. A user contains name, age, and city.
// Task
// First define an appropriate TypeScript type or interface for the user. Then create a function named formatUserProfile. The function should receive a user object and return a formatted sentence.
// Requirements
// Accept a properly typed user object.
// Return a string.
// Use the values from the object rather than hard-coding the result.

// Starter Code
// TODO: define a type or interface for the user

interface User{
    name: string,
    age: number,
    city: string
}
 
function formatUserProfile(user: User): string {
    return `${user.name} is ${user.age} years old and lives in ${user.city}.`
}


// Example
console.log(formatUserProfile({name: "Fahim", age: 22, city: "Dhaka"}));

// Expected output:
// "Fahim is 22 years old and lives in Dhaka."





// Problem 4 — Shopping Cart Calculator
// Concepts: object types, array types, reduce(), function parameter and return types
// Function name must be: calculateCartTotal
// Scenario
// An online shopping website stores each item in a customer's cart as an object containing its name and price. The store needs a function that calculates the total price of all products currently in the cart.
// Product Structure
// {
//     name: string;
//     price: number;
// }
// Task
// Create a function named calculateCartTotal. The function should receive an array of products and return the total price.
// Requirements
// Properly type the product object.
// Properly type the array of products.
// Return the total as a number.
// An empty cart should return 0.
// Starter Code
// TODO: define a type for a single product

interface Product {
    name: string,
    price: number;
}
 
function calculateCartTotal(products: Product[]): number {
    return products.reduce((sum, product) => {
        return sum + product.price;
    }, 0);
}

// Example
const products: Product[] = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
];
 
// another example:
const products2: Product[] = [
    { name: "Book", price: 500 },
    { name: "Pen", price: 50 },
    { name: "Bag", price: 1200 }
];
 
//output
console.log(calculateCartTotal(products2));  // 1750
console.log(calculateCartTotal(products));   // 2600





// Problem 5 — Student Result Analyzer
// Concepts: nested arrays, object types, reduce(), return object types, conditional logic
// Function name must be: getStudentResult
// Scenario
// A school stores the marks of each student in an array. Teachers want a quick summary containing the student's name, average mark, and whether the student passed or failed. A student is considered passed if their average mark is at least 40.
// Student Structure
// {
//     name: string;
//     marks: number[];
// }
// Task
// Create a function named getStudentResult. The function should receive a student object, calculate the average of all marks, determine whether the student passed, and return a new object containing name, average, and result.
// Edge Case
// Think about what your function should do if the marks array is empty.
// Starter Code
// TODO: define a type for a student

interface Student {
    name: string,
    marks: number[],
}

interface StudentResult {
    name: string,
    average: number,
    result: "Passed" | "Failed";
}
 
function getStudentResult(student: Student): StudentResult {
    const {name, marks} = student;

    if(marks.length === 0)
        return {name, average: 0, result: "Failed"};

    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const average = total / marks.length;

    return {name, average, result: average >= 40 ? "Passed" : "Failed"};
}
// Example
console.log(getStudentResult({name: "Rafi", marks: [80, 75, 90, 85]}));
 
// another example:
console.log(getStudentResult({name: "Nabil", marks: [30, 35, 40, 25]}));
 
// Expected output:
// { name: "Rafi", average: 82.5, result: "Passed" }
// { name: "Nabil", average: 32.5, result: "Failed" }




// Problem 6 — Role-Based Permission Checker
// Concepts: union types, literal types, function parameter types, type safety
// Function name must be: canEdit
// Scenario
// A web application has three types of users: admin, editor, and viewer. Different roles have different permissions. For this problem, only administrators and editors are allowed to edit content.
// Task
// First create a union type Role, then create a function named canEdit that receives a valid Role and returns whether that role can edit content.
// Rules
// Role   Can Edit?
// admin   true
// editor  true
// viewer  false

// TypeScript Requirement
// This should produce a TypeScript error — canEdit("guest") — since the purpose is to make TypeScript restrict the function to known roles.
// Starter Code

type Role = "admin" | "editor" | "viewer";
 
function canEdit(role: Role): boolean {
    // if(role === "admin" || role === "editor")
    //     return true;
    // return false;

    return role === "admin" || role === "editor";
}


// Example
console.log(canEdit("admin"));    // true
console.log(canEdit("editor"));   // true
console.log(canEdit("viewer"));   // false




// Problem 7 — Product Category Search
// Concepts: typed arrays, object types, function parameters, filter(), return types
// Function name must be: findProducts
// Scenario
// An e-commerce platform contains thousands of products. A customer selects a category, and the application needs to show only the products belonging to that category. Each product has a name, price, and category.
// Task
// Create a function named findProducts. The function should receive an array of products and a category, and return all products that belong to that category.
// Requirement
// If no product matches the category, return an empty array.
// Starter Code
// TODO: define a type for a product (including category)

type Product1 = {
    name: string;
    price: number;
    category: string;
};
 
function findProducts(products: Product1[], category: string): Product1[] {
    return products.filter(product => product.category === category);
}


// Example
const products1 = [
    { name: "iPhone 15", price: 90000, category: "phone" },
    { name: "Galaxy S24", price: 85000, category: "phone" },
    { name: "MacBook Air", price: 120000, category: "laptop" },
    { name: "Dell XPS", price: 110000, category: "laptop" }
];
 
console.log(findProducts(products1, "phone"));
// returns the iPhone 15 and Galaxy S24 objects
console.log(findProducts(products1, "laptop"));
// returns the two laptop products






// Problem 8 — Hospital Patient Status
// Concepts: union types, optional properties, type narrowing, discriminated unions, object types
// Function name must be: getPatientStatus
// Scenario
// A hospital has two types of patients: general patients and emergency patients. General patients only have basic information. Emergency patients have an additional emergencyLevel.
// General Patient
// {
//     name: "Rahim",
//     age: 35,
//     type: "general"
// }
// Emergency Patient
// {
//     name: "Karim",
//     age: 60,
//     type: "emergency",
//     emergencyLevel: 1
// }
// Emergency levels are: 1 → Critical, 2 → Serious, 3 → Moderate.
// Task
// Create a function named getPatientStatus. The function should receive either a general patient or an emergency patient and return an appropriate status message.

// TypeScript Requirement
// Use TypeScript's type system to represent the fact that emergencyLevel exists for emergency patients but not necessarily for general patients.

// Starter Code
// TODO: define types for GeneralPatient and EmergencyPatient
 
// function getPatientStatus(patient: GeneralPatient | EmergencyPatient): <type> {
 
//     // write your code here
 
// }
// // Example
// getPatientStatus({ name: "Rahim", age: 35, type: "general" });
// // "General patient"
 
// getPatientStatus({ name: "Karim", age: 60, type: "emergency", emergencyLevel: 1 });
// // "Critical emergency"
 
// getPatientStatus({ name: "Hasan", age: 45, type: "emergency", emergencyLevel: 3 });
// // "Moderate emergency"

