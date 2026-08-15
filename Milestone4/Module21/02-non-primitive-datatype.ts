export{}

// array of number-------------
let arr: number[] = [1, 2, 3, 4, 5]; // number[] = Array<number>
console.log(arr);

// array of string
let names: string[] = ["Asif", "Raima", "Don"];
console.log(names);

// Mixed type of array
let data: (number | string)[] = ["a", 2, "b", 3, 4, "c"];
console.log(data);

// Object-----------
let student: { name: string; age: number; isPassed: boolean } = {
  name: "Raima",
  age: 25,
  isPassed: true,
};

student.age = 35;
console.log(student);

//object with optional and fixed value
let user: {
    name: string,
    age?: number,              // optional value
    isLogin: boolean,
    favouriteItm: 'Book',      // fixed value
} = {
    name: 'Raima',
    //age: 35,
    isLogin: true,
    favouriteItm: 'Book',
}

console.log(user);


// tuple---------
let person: [string, number] = ["Raima", 35];
// let person: [string, number] = [22, "Asif"]; // ❌

console.log(person);


// function-------------

// receive and return number
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 6));

// void return
function greet():void {
    console.log('Hello world');
}
greet()

// receive number
function mul(a: number, b: number) {
  return a * b;
}
const ans: number = mul(5, 5);   //recive number
console.log(ans);

function calculate(numbers: number[], tax: number, accountant?: string): {} {
    const total: number[] = numbers.map((num) => num + (num*(tax/100)));

    return {total: total, accountant: accountant}
}

console.log(calculate([10, 20, 30], 5));
console.log(calculate([100, 20, 30], 6, 'Mota Don'));
