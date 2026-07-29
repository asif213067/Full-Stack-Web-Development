// Task 13 — Comparing Loop Types
// Write the same task — printing numbers 1 to 5 — three times: once using for, once using while, and once using do while. Compare how the code structure differs for each.


// for loop version
 for(let i=1; i<=5; i++) {
    console.log("for->", i);
 }
 
// while loop version
 let i=1;
 while(i<=5) {
    console.log("while->", i);
    i++;
 }
 
// do while loop version
let j = 1;
do{
    console.log("do while ->", j);
    j++;
}
while(j <= 5);