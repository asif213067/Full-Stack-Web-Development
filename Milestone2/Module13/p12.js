// Problem Statement:
// Write a function keepEvenNumbers that takes an array of numbers and returns a new array with only the even numbers.


// Input: an array of numbers
// Output: array with only even numbers
// Returns: an array
 
function keepEvenNumbers(numbers) {
//   let result = [];
  
//   for(let n of numbers){
//     if(n%2===0) result.push(n);
//   }

 let result = numbers.filter((val) => {

    return val%2 === 0;
 });
 
  return result;
}
 
console.log(keepEvenNumbers([3, -5, 8, -1, 0])); // Expected: [8, 0]
