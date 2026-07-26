// Problem Statement:
// Write a function reverseNumber that takes a positive whole number and returns it with its digits reversed. (Hint: convert the number to a string first.)


// Input: a number
// Output: the number with digits reversed
// Returns: a number

function reverseNumber(number) {
    let str = number.toString();
    // let newNum = "";
    // for (let i=str.length-1; i>=0; i-- ) {
    //     newNum += str[i];
    // }
    let newNum = str.split("").reverse().join("");
    
    return Number(newNum);   // parseInt(newNum);
}

console.log(reverseNumber(1234));
console.log(reverseNumber(7));
