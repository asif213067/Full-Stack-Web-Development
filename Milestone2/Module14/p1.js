// Module 14: Debugging and Problem Solving with JavaScript
// Practice Tasks (Find the Bug, Fix It) 
// Instructions:
// Run the code first and see what actually happens.
// Write a one-line comment explaining what the bug is, before fixing it.
// Fix the bug so the output matches the "Expected Output."
// Every function must still return its answer (not just console.log it).


// Task 14-1: Spot the Error Type
// Below are three small broken snippets. For each, identify the error type (Syntax / Runtime / Logic), then fix it.
// Snippet A
function sayHi(name) {
  return ("Hi, " + name);
}
 
console.log(sayHi("Mira"));  // Hi, Mira


// Snippet B
let word = "hello";
console.log(word.toUpperCase());  // HELLO


// Snippet C
function square(num) {
  return num * num; 
}
 
console.log(square(4)); // 16


// Task 14-2: Debug a Broken Conditional
// Problem Statement:
// This function should return "Pass" if a score is 50 or above, otherwise "Fail". It gives the wrong result for a score of exactly 50.
 
function checkScore(score) {
  if (score >= 50) {
    return "Pass";
  } else {
    return "Fail";
  }
}
 
console.log(checkScore(50)); // "Pass"
console.log(checkScore(40)); // "Fail"


// Task 14-3: Debug a Broken Loop
// Problem Statement:
// This function should return the count of numbers from 1 to n. Right now it never stops (infinite loop) — find out why.

// Starter Snippet (buggy):
function countUpTo(n) {
  let count = 0;
 
  for (let i = 1; i <= n; i++) {
    count = count + 1;
  }
 
  return count;
}
 
console.log(countUpTo(5)); // Expected: 5 


// Task 14-4: Debug a Broken Array Problem
// Problem Statement:
// This function should return the first element of an array. It currently returns the wrong item.

// Starter Snippet (buggy):
 
function getFirstElement(arr) {
  return arr[0];
}
 
console.log(getFirstElement([10, 20, 30])); // Expected: 10


// Task 14-5: Debug a Broken Function

// Problem Statement:
// This function should return the difference between two numbers (a - b). It currently swaps the parameters somewhere and gives a wrong result.

// Bug: find why the result comes out negative
function subtract(a, b) {
  return a - b;
}
 
console.log(subtract(10, 3)); // Expected: 7 (currently returns -7)


// Task 14-6: Rubber Duck Debugging

// Problem Statement:
// Explain this function out loud, line by line, to find the bug. It should return true if a string is empty, otherwise false.

// Bug: explain this line out loud — what does str.length actually equal for ""?
 
function isEmpty(str) {
  if (str.length === 0) {
    return true;
  } else {
    return false;
  }
}
 
console.log(isEmpty(""));  // Expected: true
console.log(isEmpty("hi")); // Expected: false


// Task 14-7: Debug a Multi-Part Bug
// Problem Statement:
// This function should return an array of only the odd numbers from the input array. It currently has two separate bugs — fix them one at a time.

// Starter Snippet (buggy):
// This code has TWO bugs. Fix one, re-run, then find the next.
 
function getOddNumbers(numbers) {
  let odds = [];
 
  for (let i = 0; i < numbers.length; i++) { 
    if (numbers[i] % 2 === 1) {                  
      odds.push(numbers[i]);
    }
  }
 
  return odds;
}
 
console.log(getOddNumbers([1, 2, 3, 4, 5, 6])); // Expected: [1, 3, 5]

// Task 14-8: Apply the Full Debugging Process
// Problem Statement:
// This function should return how many vowels are in a string. Go through the full checklist: does it run? does it crash? is the answer wrong? isolate it with console.log, then fix it.

// Starter Snippet (buggy):
// Apply the full debugging process to find this bug
 
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
 
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {      
      count = count + 1;
    }
  }
 
  return count;
}
 
console.log(countVowels("orange")); // Expected: 3


// Task 14-9: Final Homework Set (Module Summary)
// Each task below has one hidden bug. Use the full checklist from 14-10: run it, find the error type, isolate with console.log or breakpoints, fix one bug at a time.

// 14-9A: Temperature Converter
// Problem Statement: Should convert Celsius to Fahrenheit using the formula (C × 9/5) + 32.

function celsiusToFahrenheit(celsius) {
  return (celsius * (9 / 5)) + 32;
}
 
console.log(celsiusToFahrenheit(0)); // Expected: 32


// 14-9B: Array Sum Skips a Number
// Problem Statement: Should return the sum of all numbers in the array.

function sumArray(numbers) {
  let total = 0;
 
  for (let i = 0; i < numbers.length; i++) { 
    total = total + numbers[i];
  }
 
  return total;
}
 
console.log(sumArray([1, 2, 3, 4])); // Expected: 10


// 14-9C: String Repeat
// Problem Statement: Should return a string repeated a given number of times.

function repeatString(str, times) {
  let result = "";
 
  for (let i = 0; i < times; i++) {
    result += str;
  }
 
  return result;
}
 
console.log(repeatString("ab", 3)); // Expected: "ababab"

// 14-9D: Object Property Update
// Problem Statement: Should update a person's age property and return the updated object.

function updateAge(person, newAge) {
  person.age = newAge; 
  return person;
}
 
console.log(updateAge({ name: "Lee", age: 20 }, 21));
// Expected: { name: "Lee", age: 21 }