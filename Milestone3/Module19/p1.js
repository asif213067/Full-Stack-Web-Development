// Task 1: getFormattedPrices(prices) — map()
// Given an array of numbers, return a new array where each price is formatted as a string prefixed with "$".

const getFormattedPrices = (prices) =>
  prices.map((price) => (price = `$${price}`));

// Input:
console.log(getFormattedPrices([100, 250, 75]));

// Output: ["$100", "$250", "$75"]

// Task 2: getAvailableProducts(products) — filter()
// Given an array of product objects { name, stock }, return only the products where stock is greater than 0.

const getAvailableProducts = (products) =>
  products.filter((product) => product.stock > 0);

let products = [
  { name: "Pen", stock: 5 },
  { name: "Bag", stock: 0 },
  { name: "Notebook", stock: 2 },
];

// Input:
console.log(getAvailableProducts(products));

// Output:
// [{ name: "Pen", stock: 5 }, { name: "Notebook", stock: 2 }]

// Task 3: findProductByName(products, name) — find()
// Given an array of product objects, return the first product matching the given name, or undefined if not found.

const findProductByName = (products, name) =>
  products.find((product) => product.name === name);

// Input:
let products2 = [
  { name: "Pen", price: 10 },
  { name: "Bag", price: 500 },
];
console.log(findProductByName(products2, "Bag"));
console.log(findProductByName(products2, "Notebook"));

// Output:
// { name: "Bag", price: 500 }
// undefined

// Task 4: getTotalStockValue(products) — reduce()
// Given an array of products { price, stock }, return the total value of all stock combined (price × stock, summed).

const getTotalStockValue = (products) => {
  return products.reduce((total, product) => {
    return total + product.price * product.stock;
  }, 0);
};

// Input:
console.log(
  getTotalStockValue([
    { price: 50, stock: 4 },
    { price: 20, stock: 10 },
  ]),
);

// Output: 400

// Task 5: getDiscountedTotalForCategory(products, category) — Chaining map + filter + reduce
// Given an array of products { name, category, price }, return the total price of all products in the given category after applying a 10% discount to each.

const getDiscountedTotalForCategory = (products, category) => {
  // let a = products.filter((product) => product.category === category);
  // let b = a.map((product) => product.price - (product.price * 0.1));
  // let c = b.reduce((prev, curr) => prev + curr);
  // console.log(a);
  // console.log(b);
  // console.log(c);

  return products
    .filter((product) => product.category === category)
    .map((product) => product.price - product.price * 0.1)
    .reduce((prev, curr) => prev + curr, 0);
};

// Input:
let products3 = [
  { name: "Pen", category: "stationery", price: 100 },
  { name: "Bag", category: "accessory", price: 500 },
  { name: "Notebook", category: "stationery", price: 60 },
];
console.log(getDiscountedTotalForCategory(products3, "stationery"));

// Output: 144

// Task 6: createIdGenerator() — Closures
// Return a function that generates a new sequential ID starting from 1 each time it is called, using an internal counter with no global variable.

const createIdGenerator = () => {
  let count = 0;

  return () => {
    count++;
    return count;
  };
};

// Input:
const nextId = createIdGenerator();
console.log(nextId());
console.log(nextId());
console.log(nextId());

//  Output: 1, 2, 3

// Task 7: sortByPriceAscending(products) — Callback Function
// Given an array of product objects { name, price }, return a new array sorted from lowest to highest price using a comparator callback in sort().

const sortByPriceAscending = (products) => {
  return [...products].sort((a, b) => a.price - b.price);
};

// Input:
console.log(
  sortByPriceAscending([
    { name: "Bag", price: 500 },
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 60 },
  ]),
);

// Output:
//  [{ name: "Pen", price: 10 }, { name: "Notebook", price: 60 }, { name: "Bag", price: 500 }]

// Task 8: applyBonusPoints(users, bonus) — Pass by Reference vs Value
// Return a NEW array of users with points increased by bonus, without mutating the original array or its objects.

const applyBonusPoints = (users, bonus) => {
  return users.map((user) => ({
    ...user,
    points: user.points + bonus,
  }));
};

// const applyBonusPoints = (users, bonus) => {
//     return users.map((user) => {
//         return {
//             ...user,
//             points: user.points + bonus,
//         };
//     });
// };

// Input:
console.log(applyBonusPoints([{ name: "Rafi", points: 20 }], 5));

// Output: [{ name: "Rafi", points: 25 }]
//  (original array's object must still have points: 20)

// Task 9: isStrictMatch(input, target) — Truthy/Falsy and ===
// Return true only if input strictly equals target in both value and type, false otherwise.

const isStrictMatch = (input, target) => input === target;

// Input:
console.log(isStrictMatch("18", 18));
// Output: false

// Input:
console.log(isStrictMatch(18, 18));
// Output: true

// Task 10: getTopSellingProduct(orders) — Mixed (map + reduce, capstone-style)
// Given an array of orders { product, unitsSold },
// return the name of the product with the highest total units sold across all orders (a product may appear in multiple orders).

const getTopSellingProduct = (orders) => {
  let totals = orders.reduce((acc, order) => {
    acc[order.product] = (acc[order.product] || 0) + order.unitsSold;
    // console.log(acc[order.product]);
    return acc;
  }, {});
  // console.log(total);

  // return Object.entries(totals).reduce((topProduct, currProduct) => {
  //     // console.log(topProduct[1], currProduct[1]);
  //     return currProduct[1] > topProduct[1]
  //         ? currProduct
  //         : topProduct;
  // })[0];

  const result = Object.entries(totals).reduce((topProduct, currentProduct) => {
    return currentProduct[1] > topProduct[1] ? currentProduct : topProduct;
  });

  return result[0];
};

// Input:
console.log(
  getTopSellingProduct([
    { product: "Pen", unitsSold: 30 },
    { product: "Bag", unitsSold: 12 },
    { product: "Pen", unitsSold: 25 },
  ]),
);

// Output: "Pen"
