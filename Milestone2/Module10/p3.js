// 1. Given an array of numbers, remove duplicates and log the unique values only.
let num = [10, 22, 33, 33, 12, 10, 33, 1, 2];
let num2 = [];
for (let n of num) {
  if (!num2.includes(n)) {
    num2.push(n);
    // console.log(n);
  }
}
console.log(num2);


// 2. Given an array of mixed values (numbers and strings), separate them into two arrays and log both.
let mixed = [1,'a', 2, 'b', 3, 'c'];
let num3 = [];
let str = [];

for(let val of mixed) {
    if(typeof val === 'number')
        num3.push(val);
    else if(typeof val === 'string')
        str.push(val);
}
console.log(num3, str);


// 3. Given an array of numbers, find the largest and smallest value without using Math.max or Math.min directly on the whole array (use a loop).
let num4 = [12, 234, 55, 20202, 222];
let smallest = Infinity;
let largest = -Infinity;

for(let val of num4) {
    if(val > largest) {
        largest = val;
    }
    if(val < smallest)
        smallest = val;
}
console.log(smallest, largest);
console.log(Math.min(...num4), Math.max(...num4));


// 4. Flatten a nested array (array containing arrays) into a single flat array.
// Expected: [1,2,3,4,5,6] from something like [1,[2,3],[4,[5,6]]]
let arr = [1,[2,3],[4,[5,6]]];
let flatArray = arr.flat(Infinity);
console.log(flatArray);

// its work on one level nested arr like-> arr.flat();
// let flatArray = [];
// for(let item of arr){
//     if(Array.isArray(item)){
//         flatArray.push(...item);
//     }
//     else
//         flatArray.push(item);
// }
// console.log(flatArray);


// 5. Rotate an array left by one position (first item moves to the end). Log the result.
// Expected: [2,3,4,5,1] from [1,2,3,4,5]
let arr2 = [1,2,3,4,5];
let first = arr2.shift();
arr2.push(first);
console.log(arr2);