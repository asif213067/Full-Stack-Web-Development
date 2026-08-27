// A Promise in JavaScript represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It acts as a placeholder for a value that is not known when the promise is created.

// The 3 States of a Promise:

// Pending: Initial state, neither fulfilled nor rejected.
// Fulfilled (Resolved): The operation completed successfully (triggers .then()).
// Rejected: The operation failed (triggers .catch()).



function orderFood(item) {
  console.log(`${item} delivery processing`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const delivered = Math.random() > 0.3; // 70% chance of success

      if (delivered) {
        resolve(`${item} delivered`);
      } else {
        reject(new Error(`${item} not delivered`));
      }
    }, 2000);
  });
}

// Chaining Promises cleanly
orderFood("Burger")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.message);
  })
  .finally(() => {
    console.log("Food order processing done!");
  });

// output
// Burger delivery processing
// Burger delivered
// Food order processing done!



// Key Benefits Over Callbacks

// Flattens Code: Replaces nested "pyramid of doom" callbacks with clean .then() chains.
// Centralized Error Handling: Catch all errors down the chain using a single .catch() block.
// Microtask Priority: Promise callbacks run in the high-priority Microtask Queue, executing before macrotasks like setTimeout.