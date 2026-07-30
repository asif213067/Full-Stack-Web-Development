// Problem 5 —Debugging Challenge: API Response Time Monitor

function averageResponseTime(times) {
  if (!Array.isArray(times) || times.length === 0) return "Invalid";

  let total = 0;
  for (let i = 0; i < times.length; i++) {
    if(typeof times[i] !== 'number' || times[i] < 0) return "Invalid";

    total += times[i];
  }

  return total / times.length;
}

console.log(averageResponseTime([120, 200, 150, 130]));
console.log(averageResponseTime([100, 100]));
console.log(averageResponseTime([]));
console.log(averageResponseTime("logs"));
console.log(averageResponseTime([120, "200", 150]));
