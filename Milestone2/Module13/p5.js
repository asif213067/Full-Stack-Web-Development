// Problem Statement:
// Write a function countVowels that takes a string and returns how many vowels it contains. Assume the string only contains lowercase letters, no spaces.


// Input: a string (lowercase letters only)
// Output: count of vowels
// Returns: a number


function countVowels(str) {
    let count = 0;

    for(let ch of str){
        if(ch === 'a' || ch === 'e' ||ch === 'i' ||ch === 'o' ||ch === 'u') {
            count++;
        }
    }

    return count;
}

console.log(countVowels("javascript"));