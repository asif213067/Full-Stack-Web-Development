// Callback Functions
// A callback function is a function passed as an argument into another function, which is then executed after an asynchronous task completes or a specific event occurs.

// A callback is a function passed as an argument to another function.

function greeting(name) {
  console.log('Hello ' + name);
}

function processUserInput(callback) {
  var name = 'Asif'; // Input received
  callback(name);   // Executing the callback with data
}

// Passing 'greeting' as a callback argument
processUserInput(greeting); // Output: Hello Asif



// Callback Hell (Pyramid of Doom)
// Callback Hell refers to heavily nested callbacks where multiple asynchronous operations depend on the execution of previous ones. This creates a deeply indented, "pyramid-shaped" codebase that is extremely hard to read, maintain, and debug.


// // 1. Fetch Student Info
function getStudent(studentId, callback) {
  setTimeout(() => {
    console.log("Fetched student details...");
    callback({ id: studentId, name: "Asif" });
  }, 1000);
}

// 2. Fetch Quiz Marks using Student ID
function getQuizMarks(studentId, callback) {
  setTimeout(() => {
    console.log("Fetched quiz marks...");
    callback(85); // 85 out of 100
  }, 1000);
}

// 3. Fetch Assignment Marks using Student ID
function getAssignmentMarks(studentId, callback) {
  setTimeout(() => {
    console.log("Fetched assignment marks...");
    callback(90); // 90 out of 100
  }, 1000);
}

// 4. Calculate Final Grade
function calculateFinalMark(quiz, assignment, callback) {
  setTimeout(() => {
    const total = (quiz + assignment) / 2;
    callback(total);
  }, 1000);
}

// --- CALLED IN CALLBACK HELL (Pyramid of Doom) ---
getStudent(101, (student) => {
  console.log(`Processing marks for ${student.name}...`);
  
  getQuizMarks(student.id, (quizMarks) => {
    getAssignmentMarks(student.id, (assignmentMarks) => {
      calculateFinalMark(quizMarks, assignmentMarks, (finalScore) => {
        console.log(`Final Average Mark for ${student.name} is: ${finalScore}`);
      });
    });
  });
});