// In JavaScript, the this keyword references an object depending on how a function is invoked, not where it is defined. Its value is determined dynamically at runtime (except when bound explicitly or when using arrow functions).

// 1. Global Context: 

// When used outside any function or object, this refers to the global object.
//   -Browser: window
//   -Node.js: global (or empty object {} in ES modules)

console.log(this); // In browser: Window object


// 2. Implicit Binding (Object Method)
//    When a function is called as a method of an object, this refers to the object preceding the dot (.).

const user = {
  name: "Asif",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
};

user.greet(); // "Hi, I am Asif" -> `this` points to `user`


// 3. Explicit Binding (call, apply, bind)

// You can manually control what this points to using built-in Function methods:

// *** call(thisArg, arg1, arg2, ...): Invokes the function immediately, passing arguments individually.

// * apply(thisArg, [arg1, arg2]): Invokes the function immediately, passing arguments as an array.

// ***** bind(thisArg, arg1, arg2): Returns a new function with this permanently bound, without calling it immediately.

// JavaScript
function calcMarksAvg(english, math) {
  console.log(`${this.name}'s avg: ${(english + math + this.bangle + this.physice) / 4}`);
}

const student = { name: "Asif", physice: 85, bangle: 90};

// Explicitly setting `this` to `student`
calcMarksAvg.call(student, 75, 65);       // Asif's avg: 78.75
calcMarksAvg.apply(student, [75, 65]);     // Asif's avg: 78.75

const calcBound = calcMarksAvg.bind(student);
calcBound(75, 65);                        // Asif's avg: 78.75



// 4. Arrow Functions (Lexical this)

// Arrow functions do not have their own this. Instead, they inherit this from the surrounding (lexical) scope at the time they are created.


const user2 = {
  name: "Raima",
  regularFunc: function() {
    console.log(this.name); 
  },
  arrowFunc: () => {
    console.log(this.name); 
  }
};

user2.arrowFunc();       // undefined (inherits `this` from global context)
user2.regularFunc();     // "Raima"


// 5. new Binding (Constructor Functions / Classes)

// When a function is called with the new keyword, this refers to the newly created instance object.

function User(name) {
  this.name = name; // `this` points to the brand-new object
}

const user1 = new User("Don");
console.log(user1.name); // "Don"



// Summary Rules of Precedence (High to Low)

// 1. new keyword --> this is the new object.

// 2. Explicit (call, apply, bind) --> this is the specified object.

// 3. Implicit (Object method) --> this is the calling object (left of the dot).

// 4. Default/Global context --> this is window/global (undefined in strict mode).