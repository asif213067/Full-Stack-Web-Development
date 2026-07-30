// Problem 2 — Elevator Weight Safety Checker

function isElevatorSafe(weights) {
  if(!Array.isArray(weights))
    return "Invalid";

  let sumOfWeights = 0;
  for (let weight of weights) {
    if(weight < 0 || typeof weight !== 'number') return "Invalid";

    sumOfWeights += weight;
  }

  if(sumOfWeights <= 400) return true;
  else return false;
}

console.log(isElevatorSafe([60, 75, 50]));
console.log(isElevatorSafe([90, 100, 95, 120]));
console.log(isElevatorSafe([90, -100, 120]));
console.log(isElevatorSafe(['90', 100, 120]));
console.log(isElevatorSafe([400]));
console.log(isElevatorSafe("60,75,50"));
