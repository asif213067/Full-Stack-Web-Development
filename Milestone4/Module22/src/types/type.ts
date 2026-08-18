type Gender = 'Male' | 'Female';

type Student = {
    name: string,
    roll: number,
    age: number,
    gpa?: number,
    gender?: Gender,
};


const don: Student = {
    name: 'Don',
    roll: 100,
    age: 35,
    gpa: 2.4,
    gender: 'Female',
};

const motaDon: Student = {
    name: 'Mota Don',
    roll: 101,
    age: 95,
    gender: 'Female'
};


// 1. Alias
type ID = string | number;

// 2. Object
type User = {
  name: string;
  age: number;
};

// 3. Union
type Status = "pending" | "success";

// 4. Function
type Add = (a: number, b: number) => number;

// 5. Array
type Users = User[];

// 6. Intersection
type Person = {
    name: "Khan"
};

type Company = {
    name: 'XYZ',
};

type Employee = Person & Company;