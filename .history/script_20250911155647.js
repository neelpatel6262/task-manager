// Task: Given prices [100,200,300], apply 10% discount to all.
//using map function  

let prices = [100, 200, 300];

let discountedPrices = prices.map(price => price * 0.9);

console.log(discountedPrices); // Output: [90, 180, 270]

let prices2 = [150, 250, 350];

let discountedPrices2 = prices2.map(price => price * 0.9);