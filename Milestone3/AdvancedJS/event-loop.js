// The JavaScript Event Loop is the mechanism that allows JavaScript—which is single-threaded—to handle asynchronous operations (like timers, network requests, and user events) without blocking the main execution thread.


// Key Components-----

// Call Stack: Executes synchronous code line-by-line using a LIFO (Last In, First Out) structure. Functions are pushed onto the stack when invoked and popped off when they return.

// Web APIs (or Node.js APIs): Handles asynchronous tasks outside the main thread (e.g., setTimeout, fetch, DOM events). Once completed, their callbacks are sent to the task queues.

// Microtask Queue: Holds high-priority asynchronous callbacks, such as Promise resolution handlers (.then(), .catch(), .finally()), async/await continuations, and queueMicrotask.

// Callback / Task Queue (Macrotask Queue): Holds lower-priority asynchronous callbacks from setTimeout, setInterval, setImmediate, and I/O tasks.



// Execution Flow (The Loop)------

// Execute Synchronous Code: The Call Stack runs all initial synchronous scripts until it is completely empty.

// Process Microtasks: The Event Loop checks the Microtask Queue. It executes all pending microtasks until the queue is completely empty. If microtasks schedule more microtasks, they run in the same cycle.

// Render (Browser): If needed, the browser updates the UI/DOM before picking up the next task.

// Process One Macrotask: The Event Loop picks the oldest task from the Callback/Macrotask Queue and pushes it to the Call Stack for execution.

// Repeat: The cycle starts again, checking microtasks after each macrotask execution.


console.log("1. Start");

setTimeout(() => {
  console.log("2. Timeout callback (Macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Promise callback (Microtask)");
});

console.log("4. End");


// Execution Order:

// 1. Start (Synchronous, Call Stack)

// 4. End (Synchronous, Call Stack)

// 3. Promise callback (Microtask) (Microtask Queue finishes before Macrotask Queue)

// 2. Timeout callback (Macrotask) (Macrotask Queue)