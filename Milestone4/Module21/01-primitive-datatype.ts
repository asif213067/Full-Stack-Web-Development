export {}

function add(a: number, b: number): number {
  return a + b;
}

let name: string = "Asif";
let age: number = 24;
let isStudent: boolean = true;
let income:undefined = undefined;
let val: null = null;
let bigNum: bigint = 111111111112223232n;
let id:symbol = Symbol("id");

console.log(add(5, 6));
console.log(name);
console.log(age);
console.log(isStudent);
console.log(income);
console.log(val);
console.log(bigNum);
console.log(id);
console.log(typeof null);

