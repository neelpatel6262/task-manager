// Task: Given prices [100,200,300], apply 10% discount to all.


let prices = [100, 200, 300];

let discountedPrices = prices.map(price => price * 0.9);

console.log(discountedPrices); // Output: [90, 180, 270]

let prices2 = [150, 250, 350];

let discountedPrices2 = prices2.reduce(price => price * 0.9);
console.log(discountedPrices2); // Output: [135, 225, 315]

let prices3 = [120, 220, 320];
let discountedPrices3 = prices3.filter(price => price * 0.9);
console.log(discountedPrices3); // Output: [108, 198, 288]


let prices4 = [130, 230, 330];
let discountedPrices4 = prices4.forEach(price => price * 0.9);
console.log(discountedPrices4); // Output: undefined (forEach does not return a new array)

let prices5 = [140, 240, 340];
let discountedPrices5 = prices5.some(price => price * 0.9);
console.log(discountedPrices5); // Output: true (some returns a boolean)            