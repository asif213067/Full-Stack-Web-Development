class Student {
    // properties
    name: string;
    email: string;
    age: number;
    marks: number;

    // contructor -special method
    constructor(name: string, email: string, age: number, marks: number) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.marks = marks;
    }

    // method
    viewStudentInfo(): void {
        console.log(`Student name ${this.name}, age ${this.age}.\n${this.name} got ${this.marks}.`);
    }
}

const rafi = new Student('Rafi', 'rafi@gmail.com', 24, 100);
const sadia = new Student('Sadia', 'saadia@gmail.com', 23, 90);

console.log(rafi);
rafi.viewStudentInfo();
sadia.viewStudentInfo();