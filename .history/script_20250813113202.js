//numbers in javascript

let num1 = 5;
let num2 = 10;
let sum = num1 + num2;
console.log(`The sum is: ${sum}`);



//strings in javascript

let str1 = "Hello";
let str2 = "World";
let combined = str1 + " " + str2;
console.log(`The combined string is: ${combined}`);


//variables in javascript

let isJavaScriptFun = true;
let numberOfStudents = 30;
let courseName = "JavaScript Basics";

console.log(`Is JavaScript fun? ${isJavaScriptFun}`);
console.log(`Number of students enrolled: ${numberOfStudents}`);
console.log(`Course name: ${courseName}`);



//boolean in javascript

let isFishTasty = false;
console.log(`Is fish tasty? ${isFishTasty}`);


//conditions in javascript

let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}



//functions in javascript

function addNumbers(a, b) {
    return a + b;
}

let result = addNumbers(5, 10);
console.log(`The result of addition is: ${result}`);


//Parameters (Inputs for Functions)

function greetUser(name) {
    console.log(`Hello, ${name}!`);
}


//objects in javascript

let student = {
    name: "John",
    age: 21,
    isEnrolled: true
};

console.log(`Student Name: ${student.name}`);
console.log(`Student Age: ${student.age}`);
console.log(`Is Student Enrolled? ${student.isEnrolled}`);


//local storage in javascript

// Storing data
localStorage.setItem("name", "neel");
localStorage.setItem("age", 23);

// Retrieving data
let storedName = localStorage.getItem("name");
let storedAge = localStorage.getItem("age");

console.log(`Stored Name: ${storedName}`);
console.log(`Stored Age: ${storedAge}`);



//value and reference types in javascript

let num = 10; // primitive type
let anotherNum = num; // value type
anotherNum = 20; // changing anotherNum doesn't affect num
console.log(`num: ${num}, anotherNum: ${anotherNum}`);



// Data Structures

// Arrays
let fruits = ["apple", "banana", "orange"];
console.log(`First fruit: ${fruits[0]}`);

// Objects
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
console.log(`Car make: ${car.make}`);


//dom in javascript

console.log(document.title)

console.log(document.)
