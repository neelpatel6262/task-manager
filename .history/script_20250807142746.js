//function
function intro(name) {
    console.log(`Hello, ${name}! Welcome to the JavaScript world.`);
}

intro("neel");


//parameter

function greet(name, age) {
    return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greet("neel", 25));


//object

let user = {
  name: "neel",
  age: 25,
  address: {
    street: "123 Main St",
    city: "Somewhere",
    country: "USA"
  }
}


user.name;
user.age;
user.address.street;
user.address.city;
user.address.country;

user.name = "John";
user.age = 30;
user.address.street = "456 Elm St";
user.address.city = "Anywhere";
user.address.country = "Canada";




let name = "Neel";
let age = 22;

let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

let person = {
  name: "Neel",
  address: {
    city: "Navsari"
  }
};

console.log(person.name);       // Dot notation
console.log(person["address"]); // Square bracket
