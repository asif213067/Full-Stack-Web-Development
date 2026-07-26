// Problem Statement:
// Write a function findSecondSmallest that takes an array of numbers and returns the second smallest distinct value.

// Input: an array of numbers
// Output: the second smallest number
// Returns: a number

function findSecondSmallest(numbers) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  //   for (let num of numbers) {
  //     if(num < smallest) {
  //         smallest = num;
  //     }
  //   }

  //   for (let num of numbers) {
  //     if(num > smallest && num < secondSmallest) {
  //         secondSmallest = num;
  //     }
  //   }

  // better apporch
  for (let num of numbers) {

    if(num < smallest) {
        secondSmallest = smallest;
        smallest = num;
    }

    else if (num > smallest && num < secondSmallest) {
      secondSmallest = num;
    }
  }

  return secondSmallest;
}

console.log(findSecondSmallest([10, 5, 8, 20, 15])); // Expected: 8
