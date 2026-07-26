// Problem Statement: Write a function reverseWords that takes a sentence and returns it with the order of the words reversed (the letters inside each word stay the same)

// Input: a sentence (string)
// Output: sentence with word order reversed
// Returns: a string
 
function reverseWords(sentence) {
  
    let str = sentence.split(" ").reverse().join(" ");

    return str;
}
 
console.log(reverseWords("hello world")); // Expected: "world hello"
