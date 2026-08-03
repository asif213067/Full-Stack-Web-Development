// Inventory Merge & Max Score
// Function Name Must be: mergeInventory / highestScore
// একটি দোকানের Two Branch-এর Stock Array Spread Operator দিয়ে Merge করতে হবে, এবং একটি Student-দের Score Array থেকে Spread দিয়ে Highest Score বের করতে হবে।
// Input
// mergeInventory(arr1, arr2) — দুইটি Array; highestScore(scores) — একটি Number Array
// Output / নিয়ম
// mergeInventory: Spread Operator (...arr1, ...arr2) দিয়ে একটি Merged Array Return করবে
// highestScore: Math.max(...scores) দিয়ে Highest Number Return করবে
// Validation
// Return "Invalid" যদি Parameter Array না হয়।

const mergeInventory = (arr1, arr2) => {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) return 'Invalid'; 

    let arr = [...arr1, ...arr2];
    return arr;
}

const highestScore = (scores) => {
    if(!Array.isArray(scores)) return 'Invalid'; 

    return Math.max(...scores);
}

console.log(mergeInventory([1,2],[3,4]));
console.log(highestScore([3,7,2,9,4]));
console.log(highestScore("3,7,2"));

// output
// [ 1, 2, 3, 4 ]
// 9
// Invalid