// Problem 1 — Match Winner

function matchWinner(teamAGoals, teamBGoals) {
  if (
    typeof teamAGoals !== "number" ||
    typeof teamBGoals !== "number" ||
    teamAGoals < 0 ||
    teamBGoals < 0
  )
    return "Invalid";

  if (teamAGoals > teamBGoals) return "Team A Won";
  else if (teamBGoals > teamAGoals) return "Team B Won";
  else return "Draw";
}



// Problem 2 — Elevator Weight Safety Checker

function isElevatorSafe(weights) {
  if (!Array.isArray(weights)) return "Invalid";

  let sumOfWeights = 0;
  for (let weight of weights) {
    if (weight < 0 || typeof weight !== "number") return "Invalid";

    sumOfWeights += weight;
  }

  if (sumOfWeights <= 400) return true;
  else return false;
}



// Problem 3 — AI Token Cost Calculator

function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed !== "number" || tokensUsed < 0) return "Invalid";

  if (tokensUsed <= 500) return 0;
  else {
    let token = tokensUsed - 500;

    return Math.floor(token / 100) * 5;
  }
}

// Problem 4 — Top Rated Restaurant Finder

function topRatedRestaurant(restaurants) {
  if (!Array.isArray(restaurants) || restaurants.length === 0) return "Invalid";

  let rate = -1;
  let restName = "";
  for (let restaurant of restaurants) {
    if (typeof restaurant.rating !== "number" || restaurant.rating < 0)
      return "Invalid";

    if (restaurant.rating > rate) {
      rate = restaurant.rating;
      restName = restaurant.name;
    }
  }

  return restName.toUpperCase();
}



// Problem 5 —Debugging Challenge: API Response Time Monitor

function averageResponseTime(times) {
  if (!Array.isArray(times) || times.length === 0) return "Invalid";

  let total = 0;
  for (let i = 0; i < times.length; i++) {
    if (typeof times[i] !== "number" || times[i] < 0) return "Invalid";

    total += times[i];
  }

  return total / times.length;
}
