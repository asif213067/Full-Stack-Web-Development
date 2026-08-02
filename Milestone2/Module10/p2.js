// 1. Combine two arrays into one new array. Log the result.
let arr = [10, 20, 30];
let arr2 = [1, 2, 3];

let newArr = arr2.concat(arr);
console.log(newArr);


// 2. Take a portion of an array (not the whole thing) without changing the original. Log the result.
let partArr = newArr.slice(2, newArr.length - 1);
console.log(partArr);


// 3. Turn an array of words into a single sentence string.
// Expected: a string like "word word word"
let words = ["word", "word", "word"];
let sentence = words.join(" ");
console.log(sentence);


// 4. Check two variables (one array, one not) and log whether each is an array.
let num = [1, 2, 3, 4, 5];
let num2 = { 1: "a", 2: "b", 3: "c" };

if (Array.isArray(num2)) {
  console.log(num2, "is an array");
} else if (Array.isArray(num)) console.log(num, "is an array");



// extra
if (typeof num2 === "object" && !Array.isArray(num2))
  console.log(num2, "is an objects");


// 5. Reverse an array of at least 5 items. Log the result.
let numbers = [1, 2, 3, 4, 5];
let numbers2 = [];
for (let i=numbers.length-1; i>=0; i--) {
    numbers2.push(numbers[i]);
}
console.log(numbers2);
console.log(numbers.reverse());


// 6. Sort an array of names alphabetically. Log the result.
let names = ['Asif', 'Raima', 'Don', 'Vajal']
console.log(names.sort());


// 7. Sort an array of numbers in ascending order, keeping numeric order correct (not string order).
let sortNum = [1, 9, 0, 7, 2];
console.log(sortNum.sort());


// 8. Given an array of numbers, log only the values greater than 10, using a loop.
let n = [1, 45, 89, 2, 33, 2, 9, 0, 2];
for (let num of n) {
    if(num > 10)
        console.log(num);
}


// 9. Given an array of numbers, calculate and log the total sum, using a loop.
let n2 = [1, 45, 89, 2, 33, 2, 9, 0, 2];
let sum = 0;
for (let num of n2) {
    sum += num;
}
console.log(sum);