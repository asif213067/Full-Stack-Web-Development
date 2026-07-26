// Problem Statement:
// Write a function getValueOrDefault that takes an object, a key name, and a default value, and returns the object's value for that key if it exists, otherwise the default value.

// Input: an object, a key (string), a default value
// Output: the value at that key, or the default
// Returns: any value

function getValueOrDefault(obj, key, defaultValue) {
  //   if(obj[key] !== undefined) return obj[key];
  //   else return defaultValue;

  // return obj[key] !== undefined ? obj[key] : defaultValue;

    // Nullish Coalescing operatoe ??
    return obj[key] ?? defaultValue;
}

let person = { name: "Sam", age: 25 };
console.log(getValueOrDefault(person, "age", 0)); // Expected: 25
console.log(getValueOrDefault(person, "grade", "N/A")); // Expected: "N/A"
