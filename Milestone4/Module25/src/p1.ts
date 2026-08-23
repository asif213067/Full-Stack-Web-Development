// Problem 1 — Battery Level Status
// Statement:
// Create a function named getBatteryStatus that receives a battery percentage (0–100) as a number and returns a friendly battery status string ("Low", "Medium", "High", or "Full").

// Solution:
function getBatteryStatus(percentage: number): string {
    if (percentage <= 20) return "Low";
    if (percentage <= 50) return "Medium";
    if (percentage <= 90) return "High";
    return "Full";
}

// Test Cases:
console.log(getBatteryStatus(10));  // Expected output: "Low"
console.log(getBatteryStatus(35));  // Expected output: "Medium"
console.log(getBatteryStatus(75));  // Expected output: "High"
console.log(getBatteryStatus(100)); // Expected output: "Full"








// Problem 2 — Table Booking Confirmation
// Statement:
// Define a Booking type/interface containing name, guests, and time. Create a function named formatBookingConfirmation that receives a booking object and returns a confirmation sentence.

// Solution:
interface Booking {
    name: string;
    guests: number;
    time: string;
}

function formatBookingConfirmation(booking: Booking): string {
    const { name, guests, time } = booking;
    return `${name}'s table for ${guests} guests is confirmed at ${time}.`;
}


// Test Cases:
console.log(formatBookingConfirmation({ name: "Aisha", guests: 4, time: "7:00 PM" })); 
// Expected output: "Aisha's table for 4 guests is confirmed at 7:00 PM."

console.log(formatBookingConfirmation({ name: "Rahim", guests: 2, time: "8:30 PM" })); 
// Expected output: "Rahim's table for 2 guests is confirmed at 8:30 PM."







// Problem 3 — Weekly Expense Tracker
// Statement:
// Create a function named calculateWeeklyTotal that receives an array of expense numbers and returns the total. An empty array should return 0.

// Solution:
function calculateWeeklyTotal(expenses: number[]): number {
    return expenses.reduce((sum, expense) => sum + expense, 0);
}


// Test Cases:
console.log(calculateWeeklyTotal([200, 450, 100])); // Expected output: 750
console.log(calculateWeeklyTotal([1000, 250]));    // Expected output: 1250
console.log(calculateWeeklyTotal([]));             // Expected output: 0








// Problem 4 — Traffic Light Action
// Statement:
// Create a union type Light ("red" | "yellow" | "green"), then create a function named getTrafficAction that receives a Light and returns the correct action.

// Solution:
type Light = "red" | "yellow" | "green";

function getTrafficAction(light: Light): string {
    if (light === "red") return "Stop";
    if (light === "yellow") return "Slow Down";
    return "Go";
}

// Test Cases:
console.log(getTrafficAction("red"));    // Expected output: "Stop"
console.log(getTrafficAction("yellow")); // Expected output: "Slow Down"
console.log(getTrafficAction("green"));  // Expected output: "Go"






// Problem 5 — Quiz Score Summary
// Statement:
// Create a function named getQuizSummary that receives an array of scores and returns an object containing total and average.

// Solution:
interface QuizSummary {
    total: number;
    average: number;
}

function getQuizSummary(scores: number[]): QuizSummary {
    if (scores.length === 0) {
        return { total: 0, average: 0 };
    }

    const total = scores.reduce((sum, score) => sum + score, 0);
    const average = total / scores.length;

    return { total, average };
}

// Test Cases:
console.log(getQuizSummary([8, 9, 7, 10])); // Expected output: { total: 34, average: 8.5 }
console.log(getQuizSummary([5, 5]));        // Expected output: { total: 10, average: 5 }
console.log(getQuizSummary([]));            // Expected output: { total: 0, average: 0 }