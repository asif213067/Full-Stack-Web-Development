// Problem Statement:
// Write a function checkTemperature that takes a temperature (in Celsius) and returns "Hot" if it is 30 or above, "Cold" if it is 15 or below, and "Normal" otherwise.

// Input: a number
// Output: "Hot", "Cold", or "Normal"
// Returns: a string


function checkTemperature (temperature) {
    if (temperature >= 30) {
        return "Hot";
    }
    else if (temperature <= 15) {
        return 'Cold';
    }
    else {
        return 'Normal';
    }
}

console.log(checkTemperature(30));
console.log(checkTemperature(15));
console.log(checkTemperature(18));