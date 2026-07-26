// Problem Statement:
// Write a function productOfDigits that takes a positive whole number and returns the product of its individual digits.

// Input: a number
// Output: product of its digits
// Returns: a number

function productOfDigits (num) {
    let str = num.toString();
    let total = 1;

    for(let ch of str) {
        let n = Number(ch);
        total *= n;
    }
    
    return total;
}

console.log(productOfDigits(123));
console.log(productOfDigits(4040));
