interface Employee {
  name: string;
  age: number;
  designation: string;
  salary: number;
  address?: string;
}

const elon: Employee = {
  name: "Elon",
  age: 65,
  designation: "kamla",
  salary: 2,
  address: "Chor bari",
};

const mark: Employee = {
  name: "Mark",
  age: 55,
  designation: "kamla",
  salary: 2,
};

const bill: Employee = {
  name: "Bill",
  age: 68,
  designation: "kamla pro",
  salary: 3,
  address: "Chor bari pro",
};

const team: Employee[] = [
  elon,
  mark,
  bill,
  { name: "Alice", age: 24, designation: "soft", salary: 50000 },
];


function printEmployeeDetailsWithOneVariable(emp : Employee): void {
    console.log(emp.name);
    console.log(emp.age);
    console.log(emp.designation);
    console.log(emp.salary);
    console.log(emp.address);
}

printEmployeeDetailsWithOneVariable(elon);
printEmployeeDetailsWithOneVariable({ name: "Alice", age: 24, designation: "soft", salary: 50000 });


function printEmployeeDetailsSpreadWay({name, age, designation, salary, address} : Employee): void {
    console.log(name);
    console.log(age);
    console.log(designation);
    console.log(salary);
    console.log(address);
}

printEmployeeDetailsSpreadWay(elon);
printEmployeeDetailsWithOneVariable({ name: "Alice", age: 24, designation: "soft", salary: 50000 });


// =====================

type UserRole = "Admin" | "User" | "Modaretor" | "Guest"

interface User{
    name: string,
    age: number,
    email: string,
    add?: string
}

interface Admin extends User {
    permission: string[],
}

interface Modaretor extends User {
    modaretedSection: string[],
}

interface Guest extends User{
    weight: number;
};

const bigBoss: Admin = {
    name: 'Asif',
    age: 25,
    email: 'a@email.com',
    add: 'Pabna',
    permission: ['visit', 'change', 'add', 'free'],
};

const pyMentor: Modaretor = {
    name: 'Rakib',
    age: 23,
    email: "as@gmail.com",
    modaretedSection: ['class', 'problem solve', 'interview']
};

const guest: Guest = {
    name: 'Mota Don',
    age: 80,
    email: 'mota@gmail.com',
    add: 'motar bari',
    weight: 84,
};