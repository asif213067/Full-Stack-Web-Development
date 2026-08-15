export {}

const user: {
    name: string,
    age: number,
    isAdmin: boolean,
} = {
    name: 'Don',
    age: 45,
    isAdmin: true,
}

// destructuring
const {name:userName, age, isAdmin} = user;    // Here userName is rename of name (not type conversion)
console.log(user);
console.log(userName, age, isAdmin);

let userInfo = ['Rohim', 22, true];
const [name, userAge] = userInfo;
console.log(userInfo);
console.log(name, userAge);


// rest operator
let device = {
    name: 'Samsung',
    type: 'Smart Phone',
    price: 200000,
    color: 'black'
}

let {name: deviceName, ...deviceInfo} = device;
console.log(deviceName, deviceInfo);


// Spread operator 
let num1: number[] = [1, 2, 3, 4];
let num2: number[] = [11, 222, 333];
let newNum: number[] = [...num1, ...num2];
console.log(newNum);


// union type |
const calTax = (amount:(number | string), tax: number): number => {
    if(typeof amount === 'string')
        amount = parseFloat(amount);

    return amount * (tax/100);
}

console.log(calTax(100000, 20));
console.log(calTax('20000', 20));
