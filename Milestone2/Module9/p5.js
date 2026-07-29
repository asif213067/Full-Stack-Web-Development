// Task 11 — Using Continue 
// Write a for loop from 1 to 20 that skips (continue) any number divisible by 4.

for (let i=1; i<=20; i++) {
    if(i%4===0) continue;
    console.log(i);
}