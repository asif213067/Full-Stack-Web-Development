// Problem 3 — AI Token Cost Calculator

function calculateAiCost(tokensUsed) {
 if(typeof tokensUsed !== 'number' || tokensUsed < 0)
    return "Invalid";

 if(tokensUsed <= 500)
    return 0;
 else {
    let token = tokensUsed - 500;

    return Math.floor(token/100) * 5;
 }
}

console.log(calculateAiCost(300));
console.log(calculateAiCost(500));
console.log(calculateAiCost(650));
console.log(calculateAiCost(1000));
console.log(calculateAiCost(-10));
console.log(calculateAiCost("500"));
console.log(calculateAiCost(700));
