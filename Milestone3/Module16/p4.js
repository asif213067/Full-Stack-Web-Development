// BMI Calculator (Arrow Refactor)
// Function Name Must be: calculateBMI
// একটি Fitness App-এর পুরানো ES5 Function কে Arrow Function এ Refactor করতে হবে। Function টি Weight (kg) এবং Height (m) নিয়ে BMI বের করবে।
// Input
// Arrow Function দুইটি Parameter গ্রহণ করবে — weight (Number, kg), height (Number, m)
// Output / নিয়ম
// BMI = weight / (height × height)
// Return করতে হবে BMI একটি Number হিসেবে, 2 Decimal Place পর্যন্ত (toFixed(2), তারপর Number এ Convert)
// Validation
// Return "Invalid" যদি weight বা height শূন্য বা Negative হয়।

const calculateBMI = (weight, height) => {
    if(weight < 1 || height< 1) return 'Invalid';

    let BMI = weight / (height*height);
    return Number(BMI.toFixed(2));
}

console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(50, 1.6));
console.log(calculateBMI(60, -1.7));
console.log(calculateBMI(57, 1.7));

// output
// 22.86
// 19.53
// Invalid
// 19.72