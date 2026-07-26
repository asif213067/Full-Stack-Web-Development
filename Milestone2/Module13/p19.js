// Problem Statement: Write a function invertObject that takes an object with unique values and returns a new object where each original value becomes a key, and each original key becomes its value.

// Input: an object (values are unique)
// Output: a new object with keys and values swapped
// Returns: an object
 
function invertObject(obj) {
  let inverted = {};

//   for (let [key, val] of Object.entries(obj) ) {
//     inverted[val] =  key;
//   }

    for(let key in obj) {
        inverted[obj[key]] = key;
    }
  
 
  return inverted;
}
 
console.log(invertObject({ a: 1, b: 2, c: 3 }));
// Expected: { 1: "a", 2: "b", 3: "c" }
