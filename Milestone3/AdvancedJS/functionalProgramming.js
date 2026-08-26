// ==========================================
// 1. FIRST-CLASS FUNCTIONS
// (Functions treated like any normal variable)
// ==========================================

function multiply(a, b) {
  return a * b;
}

// A. Store a function in an Array
const arr = [];
arr.push(multiply);
console.log(arr[0](10, 20)); // Output: 200

// B. Store a function in an Object
const myObj = { multiply };
console.log(myObj.multiply(2, 2)); // Output: 4

// C. Declare/nest functions inside another function
function myFunc2() {
  function myFunc3() {
    console.log("Inside function");
  }
  myFunc3();
}
myFunc2(); // Output: Inside function


// ==========================================
// 2. HIGHER-ORDER FUNCTIONS
// (Functions that take or return other functions)
// ==========================================

function sum(a, b) {
  return a + b;
}

// A HOF taking a function (`func`) as an argument and returning a new function
function myFunc3(a, b, c, d, func) {
  return function() {
    let result = func(a, b);
    return result + c + d;
  };
}

// Passing `sum` into `myFunc3` (Function as Argument)
const combinedFunc = myFunc3(10, 20, 5, 5, sum);

// Executing the returned function (Function as Return Value)
console.log(combinedFunc()); // Output: 40




// ==========================================
// 3. Immutaability
// ==========================================

// Mutable approach (modifies original array)
const arr1 = [1, 2, 3];
arr1.push(4); 

// Immutable approach (creates a new array using spread operator)
const arr2 = [1, 2, 3];
const newArr = [...arr2, 4]; // arr2 remains [1, 2, 3]