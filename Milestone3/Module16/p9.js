// ES6 Refactor Challenge
// Function Name Must be: refactorToES6 (concept task)
// নিচের ES5-Style Codeটি পুরোনো একটি Shopping Cart Total Calculator। তোমার কাজ হলো এটিকে পুরো পুরো ES6 দিয়ে Refactor করা (var → let/const, String Concat → Template Literal, Regular Function → Arrow Function, Loop → Spread/reduce), তারপর ChatGPT কে দিয়ে তোমার Refactor Verify করা।
// Input
// নিচের ES5 Snippetটি ইনপুট হিসেবে ধরো
// Output / নিয়ম
// var সব দুর করে let / const দিয়ে বদলানো
// String Concatenation ('+') দুর করে Template Literal (`...`) দিয়ে বদলানো
// Regular Function → Arrow Function তে Refactor করো
// for-loop এর Total Sum একটি Array.reduce() অথবা Spread দিয়ে লিখো
// Validation
// Refactorএর পর মূল Function-এর Output অপরিবর্তিত থাকতে হবে।
// স্টার্টার কোড
// ES5 — refactor this fully to ES6:
var calculateTotal = function(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }
  return 'Total: ' + total + ' Taka';
};

const refactorToES6 = (items) => {
    // let total = 0;
    // for(let obj of items) {
    //     total += obj.price;
    // }
    
    // const total = items.reduce((sum, item) => {
    //     return sum + item.price;
    // }, 0);

    const total = items.reduce((sum, item) => sum + item.price, 0);

    // const prices = [...items].map((item) => item.price);
    // const total = prices.reduce((prev, curr) => prev + curr);
    
    return `Total: ${total} Taka`;
}

console.log(calculateTotal([{price:100},{price:250}]));
console.log(calculateTotal([{price:80}]));

console.log(refactorToES6([{price:100},{price:250}]));
console.log(refactorToES6([{price:80}]));


// output
// Total: 350 Taka
// Total: 80 Taka
// Total: 350 Taka
// Total: 80 Taka