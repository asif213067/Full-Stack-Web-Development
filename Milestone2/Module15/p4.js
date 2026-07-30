// Problem 4 — Top Rated Restaurant Finder

function topRatedRestaurant(restaurants) {
    if(!Array.isArray(restaurants) || restaurants.length === 0)
        return "Invalid";

    let rate = -1;
    let restName = '';
    for (let restaurant of restaurants) {
        if(typeof restaurant.rating !== 'number' || restaurant.rating < 0)
            return "Invalid";

        if(restaurant.rating > rate){
            rate = restaurant.rating;
            restName = restaurant.name;
        }
    }
    
    return restName.toUpperCase();
}


console.log(topRatedRestaurant([{name:"Chillox",rating:4.5},{name:"Sultan's Dine",rating:4.8}]));
console.log(topRatedRestaurant([{name:"KFC",rating:4.2},{name:"Pizza Hut",rating:4.6}]));
console.log(topRatedRestaurant([]));
console.log(topRatedRestaurant("restaurants"));
console.log(topRatedRestaurant([{name:"Chillox",rating:0},{name:"Sultan's Dine",rating:0}]));
