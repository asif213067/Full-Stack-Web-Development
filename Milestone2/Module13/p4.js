// Problem Statement:
// Write a function getOddNumbers that takes a number n and returns an array of all odd numbers from 1 to n (inclusive).

// Input: a number
// Output: array of odd numbers from 1 to n
// Returns: an array

function getOddNumbers (n) {
    let odds = [];

    for (let i=1; i<=n; i++)
    {
        if(i%2 === 1)
        {
            odds.push(i);
        }
    }

    return odds;
}

console.log(getOddNumbers(50));
console.log(getOddNumbers(10));
