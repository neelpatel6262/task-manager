// Calculator Functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by 0";
  }
  return a / b;
}

// Testing our calculator
console.log("Add: ", add(10, 5));        // 15
console.log("Subtract: ", subtract(10, 5)); // 5
console.log("Multiply: ", multiply(10, 5)); // 50
console.log("Divide: ", divide(10, 5));     // 2
console.log("Divide: ", divide(10, 0));     // Error
