// Problem Statement:
// Write a function findShortestWord that takes a sentence and returns the shortest word in it.


// Input: a sentence (string)
// Output: the shortest word
// Returns: a string
 
function findShortestWord(sentence) {
  let words = sentence.split(" ");
  let shortest = words[0];

  for(let word of words) {
    if(shortest.length > word.length) {
        shortest = word;
    }
  }
 
  return shortest;
}
 
console.log(findShortestWord("JavaScript is a fun language")); // Expected: "a"
