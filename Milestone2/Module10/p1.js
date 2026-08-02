// 1. Create an array with 3 items of your choice. Log it.
// Expected: array with your 3 items printed
let arr = [10, 20, 30];
console.log(arr);

// 2. Log the length of the array from Task 1.
// Expected: 3
console.log(arr.length);

// 3. Log the item at index 0 and index 2 of the array.
console.log(arr[0], arr[2]);

// 4. Change the item at index 1 to a new value. Log the array.
arr[0] = 100;
console.log(arr);

// 5. Add one item to the end of the array. Log the array.
arr.push(300);
console.log(arr);

// 6. Remove the last item from the array. Log the array and the removed value.
let lastVal = arr.pop();
console.log(arr, lastVal);

// 7. Add one item to the start of the array. Log the array.
arr.unshift(101);
console.log(arr);

// 8. Remove the first item from the array. Log the array and the removed value.
let firstVal = arr.shift();
console.log(arr, firstVal);

// 9. Check whether the array contains a specific value. Log true or false.
console.log(arr.includes(20));

// 10. Find the position of a specific value in the array. Log the number.
console.log(arr.indexOf(20), arr[arr.indexOf(20)]);

// 11. Loop through the array with a for loop and log each item.
for (let i=0; i<arr.length; i++)
    console.log(arr[i]);

// 12. Loop through the array with a while loop and log each item.
let i=0;
while(i<arr.length) {
    console.log(arr[i]);
    i++;
}