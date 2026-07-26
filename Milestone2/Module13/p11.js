// Problem Statement:
// Write a function averageOfArray that takes an array of numbers and returns their average.

// Input: an array of numbers
// Output: the average of all numbers
// Returns: a number
 
function averageOfArray(numbers) {
  let total = 0;
  for(let n of numbers){
    total += n;
  }
 
  return total/numbers.length;
}
 
console.log(averageOfArray([2, 4, 6])); // Expected: 4
