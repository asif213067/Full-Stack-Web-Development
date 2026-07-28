// Build a simple login + role-check system that verifies username/password and shows a different message based on admin/user role — combine everything from this module (comparison, logical operators, if-else, ternary).

let logIn = false;
let admin = true;
let userName = "Asif";
let password = "1234";

if (userName === "Asif" && password === "1234") {
  if(!logIn){
    admin ? console.log('Admin'): console.log('User');
  }
}
else {
    console.log('Please Log in...');
}
