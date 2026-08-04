// Task 1.1 — Spot the Difference
// let str = "hello";
// let arr = ["h", "e", "l", "l", "o"];
// Log str.length and arr.length. What do you notice?
// Try str[0] and arr[0]. Do both work the same way?
// Try str.push("!") — what happens? Why does this fail for strings but not arrays?

let str = "hello";
let arr = ["h", "e", "l", "l", "o"];
console.log(str.length, arr.length);
console.log(str[0], arr[0]);


// Task 1.2 — Convert Between Them
// Convert the string "JavaScript" into an array of characters.
// Convert the array ["c", "a", "t"] back into a single string "cat".
let str2 = "JavaScript";
let arr2 = ["c", "a", "t"];

console.log(str2.split(''));
console.log(arr2.join(""));


// Task 2.1 — Case Conversion
// let name = "JavaScript";
// Print the uppercase version.
// Print the lowercase version.
// Print the string with whitespace trimmed: "   hi there   " → "hi there"

let name = "JavaScript";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log("   hi there   ".trim());


// Task 3.1 — Slicing Strings
// let sentence = "Learning JavaScript is fun!";
// Get just the word "Learning" using .slice().
// Get the last 4 characters ("fun!") using .slice() with a negative index.

let sentence = "Learning JavaScript is fun!";
console.log(sentence.slice(0,8));
console.log(sentence.slice(-4));


// Task 3.2 — Combine Strings
// Use .concat() to join "Hello" and "World" into "Hello World".
// Use + and template literals to do the same thing. Compare all three approaches.
let str3 = 'Hello';
let str4 = ' World';
console.log(str3.concat(str4));
console.log(str3 + str4);
console.log(`${str3}${str4}`);


// Task 4.1 — Three Reversal Methods
// Write a function reverseString(str) three different ways:
// Using .split(""), .reverse(), and .join("")
// Using a for loop that builds the reversed string character by character
// Test all three with "JavaScript" → should return "tpircSavaJ".
// Bonus: Which method do you think is fastest? Why?

let str5 = "JavaScript";
//O(n)
console.log(str5.split('').reverse().join(''));

function reverseString(str) {
    // O(n^2)  not recommended
    // let result = "";
    // for(let i=str.length-1; i>=0; i--) {    // O(n)
    //     result += str[i];                   // O(n)
    // }
    // return result;

    // O(n)
    let char = [];
    for(let i=str.length-1; i>=0; i--) {  
        char.push(str[i]);   // O(1)
    }
    return char.join("");  //O(n)
}
console.log(reverseString("Hello World!"));


// Task 5.1 — Build a Profile Object
// Create an object student with these properties: name, age, grade, and isEnrolled.
// Log the whole object.
// Log just the name property using dot notation.

let student = {
    name: 'Asif',
    age: 24,
    grade: 'A+',
    isEnrolled: true,
}

console.log(student);
console.log(student.name, student.age, student.grade, student.isEnrolled);


// Task 5.2 — Watch the Video Concept
// After watching the "What is an Object" video, write 2–3 sentences (as a comment in your code) explaining an object in your own words, using a real-life analogy (not a car or a person — get creative!).



// Task 6.1 — Dot vs Bracket Notation
// let car = { brand: "Toyota", model: "Corolla", year: 2022 };
// Get brand using dot notation.
// Get model using bracket notation.
// Add a new property color: "blue" using bracket notation.
// Update year to 2023 using dot notation.

let car = { brand: "Toyota", model: "Corolla", year: 2022 };
car['color'] = 'blue';
car.year = 2023;
console.log(car.brand, car['model']);
console.log(car);


// Task 7.1 — Keys and Values
// let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };
// Get an array of all keys 
// Get an array of all 
// Delete the pages property using delete.

let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };
console.log(Object.keys(book));
console.log(Object.entries(book).flat());

delete book.pages;
console.log(book);


// Task 7.2 — Nested Objects
// let user = {
//   username: "coder123",
//   address: {
//     city: "Austin",
//     zip: "78701"
//   }
// }
// Log the city using dot notation chaining.
// Add a country property inside the address.
// Delete the zip property from the nested object.

let user = {
  username: "coder123",
  address: {
    city: "Austin",
    zip: "78701"
  }
}
console.log(user.address.city);

user.address.country = 'Austria';
// delete user.address.zip;
delete user['address']['zip'];
console.log(user);


// Task 8.1 — Loop Through Properties
// let scores = { math: 90, science: 85, art: 95 };
// Use a for...in loop to log each key and value like: math: 90.
// Calculate the average of all values in the loop.

let scores = { math: 90, science: 85, art: 95 };
let marks = 0;
let cnt = 0;

for(let key in scores) {
    console.log(`${key}: ${scores[key]}`);
    
    marks += scores[key];
    cnt++;
}

console.log(`Average: ${marks/cnt}`);


// Task 9.1 — Contact Book
// Build a small "contact" system:
let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234"
};

// Convert the email to lowercase and update the object.
contact.email = contact.email.toLowerCase();

// Loop through the contact object and print each key-value pair.
for(let key in contact) {
    console.log(`${key}: ${contact[key]}`);
}

// Check if the email includes "@email.com" (case-insensitive) and log a confirmation message.
if(contact.email.endsWith('@email.com'))
    console.log(`Hello ${contact.name}`);
else
    console.log('User Not Found!');


// Output:
// 5 5
// h h
// [
//   'J', 'a', 'v', 'a',
//   'S', 'c', 'r', 'i',
//   'p', 't'
// ]
// cat
// JAVASCRIPT
// javascript
// hi there
// Learning
// fun!
// Hello World
// Hello World
// Hello World
// tpircSavaJ
// !dlroW olleH
// { name: 'Asif', age: 24, grade: 'A+', isEnrolled: true }
// Asif 24 A+ true
// Toyota Corolla
// { brand: 'Toyota', model: 'Corolla', year: 2023, color: 'blue' }
// [ 'title', 'author', 'pages' ]
// [ 'title', 'The Hobbit', 'author', 'Tolkien', 'pages', 310 ]
// { title: 'The Hobbit', author: 'Tolkien' }
// Austin
// {
//   username: 'coder123',
//   address: { city: 'Austin', country: 'Austria' }
// }
// math: 90
// science: 85
// art: 95
// Average: 90
// name: Alex Johnson
// email: alex@email.com
// phone: 555-1234
// Hello Alex Johnson