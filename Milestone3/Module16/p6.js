// User Profile Extractor
// Function Name Must be: extractUserInfo
// একটি Social App-এর API একটি Nested User Object Return করে। Destructuring ব্যবহার করে Nested Data থেকে Name, Age এবং Hobby List-এর First Item বের করতে হবে।
// Input
// extractUserInfo(userObj) — userObj = { user: { name, age }, hobbies: […] }
// Output / নিয়ম
// Object এবং Array Destructuring ব্যবহার করতে হবে (Default এবং Rename সহ)
// Return করতে হবে: "<name> (<age>) likes <firstHobby>"
// hobbies Array Empty হলে firstHobby এর Default হবে "nothing yet"
// Validation
// Return "Invalid" যদি user.name না থাকে।

const extractUserInfo = (userObj) => {
  const {
    user: { name, age: userAge },
    hobbies: [firstHobby = "nothing yet"],
  } = userObj;

  //  let {user:{name, age:userAge}, hobbies:[firstHobby]} = userObj;
  if (!name) return "Invalid";
  //  if(!firstHobby)
  //     firstHobby  = "nothing yet";

  return `${name} (${userAge}) likes ${firstHobby}.`;
};

console.log(
  extractUserInfo({
    user: { name: "Sadia", age: 22 },
    hobbies: ["reading", "coding"],
  }),
);
console.log(extractUserInfo({ user: { name: "Rafi", age: 19 }, hobbies: [] }));
console.log(extractUserInfo({ user: { age: 30 }, hobbies: [] }));

// output
// Sadia (22) likes reading.
// Rafi (19) likes nothing yet.
// Invalid