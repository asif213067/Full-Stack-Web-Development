let price = 200;
let quantity = 3;
let discount = 10;

let totalPrice = price * quantity;
let discountAmount = (totalPrice * discount) / 100;
let finalPrice = totalPrice - discountAmount;

console.log(finalPrice);
