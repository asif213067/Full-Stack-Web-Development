// Problem Statement:
// Write a function isPalindrome that takes a string and returns true if it reads the same forwards and backwards, otherwise false. Assume lowercase, no spaces.

// Input: a string
// Output: true or false
// Returns: a boolean
 
function isPalindrome(str) {
  let newStr = str.split("").reverse().join("");

  if(str === newStr) return true;
  else return false;
 
}
 
console.log(isPalindrome("level")); // Expected: true
console.log(isPalindrome("hello")); // Expected: false
