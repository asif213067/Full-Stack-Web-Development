// Problem Statement: Write a function isPerfectSquare that takes a number and returns true if it is a perfect square, otherwise false.

// Input: a number
// Output: true or false
// Returns: a boolean
 
function isPerfectSquare(num) {
  
    let root = Math.sqrt(num);
    return Number.isInteger(root)
    
    
    // for (let i=0; i<=num; i++)
    // {
    //     if(i * i === num) return true;
    // }
    // return false;
}
 
console.log(isPerfectSquare(16)); // Expected: true
console.log(isPerfectSquare(20)); // Expected: false