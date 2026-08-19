"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elon = {
    name: "Elon",
    age: 65,
    designation: "kamla",
    salary: 2,
    address: "Chor bari",
};
const mark = {
    name: "Mark",
    age: 55,
    designation: "kamla",
    salary: 2,
};
const bill = {
    name: "Bill",
    age: 68,
    designation: "kamla pro",
    salary: 3,
    address: "Chor bari pro",
};
const team = [
    elon,
    mark,
    bill,
    { name: "Alice", age: 24, designation: "soft", salary: 50000 },
];
function printEmployeeDetailsWithOneVariable(emp) {
    console.log(emp.name);
    console.log(emp.age);
    console.log(emp.designation);
    console.log(emp.salary);
    console.log(emp.address);
}
printEmployeeDetailsWithOneVariable(elon);
printEmployeeDetailsWithOneVariable({ name: "Alice", age: 24, designation: "soft", salary: 50000 });
function printEmployeeDetailsSpreadWay({ name, age, designation, salary, address }) {
    console.log(name);
    console.log(age);
    console.log(designation);
    console.log(salary);
    console.log(address);
}
printEmployeeDetailsSpreadWay(elon);
printEmployeeDetailsWithOneVariable({ name: "Alice", age: 24, designation: "soft", salary: 50000 });
;
const bigBoss = {
    name: 'Asif',
    age: 25,
    email: 'a@email.com',
    add: 'Pabna',
    permission: ['visit', 'change', 'add', 'free'],
};
const pyMentor = {
    name: 'Rakib',
    age: 23,
    email: "as@gmail.com",
    modaretedSection: ['class', 'problem solve', 'interview']
};
const guest = {
    name: 'Mota Don',
    age: 80,
    email: 'mota@gmail.com',
    add: 'motar bari',
    weight: 84,
};
//# sourceMappingURL=interface.js.map