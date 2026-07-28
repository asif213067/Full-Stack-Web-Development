// Problem Statement:
// Build a simple discount system: if cart total is above 1000 AND the user is a member, apply a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount — use logical operators combined with if-else if.


let user = true;
let cartTotal = 120;

if(cartTotal > 1000 && user === true) {
    discount = (cartTotal*20)/ 100;
    console.log(cartTotal - discount);
}
else if(cartTotal > 1000) {
    discount = (cartTotal*10)/ 100;
    console.log(cartTotal - discount);
}
else {
    console.log(cartTotal);
}