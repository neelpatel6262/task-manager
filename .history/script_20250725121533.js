// // // // Wait for the DOM to load
// // // window.addEventListener('DOMContentLoaded', function() {
// // //   const form = document.querySelector('form');
// // //   const inputs = form.querySelectorAll('input[type="number"]');

// // //   // Create a result display element
// // //   const resultDiv = document.createElement('div');
// // //   resultDiv.className = 'result';
// // //   form.appendChild(resultDiv);

// // //   form.addEventListener('submit', function(event) {
// // //     event.preventDefault(); // Prevent page reload

// // //     let total = 0;
// // //     let count = 0;
// // //     let values = [];
// // //     inputs.forEach(input => {
// // //       const value = parseFloat(input.value);
// // //       if (!isNaN(value)) {
// // //         total += value;
// // //         count++;
// // //         values.push(value);
// // //       }
// // //     });

// // //     if (count === 0) {
// // //       resultDiv.textContent = 'Please enter at least one grade.';
// // //       return;
// // //     }

// // //     const average = total / count;
// // //     let grade = '';
// // //     if (average >= 90) grade = 'A';
// // //     else if (average >= 80) grade = 'B';
// // //     else if (average >= 70) grade = 'C';
// // //     else if (average >= 60) grade = 'D';
// // //     else grade = 'F';

// // //     resultDiv.innerHTML =
// // //       `<strong>Total:</strong> ${total}<br>` +
// // //       `<strong>Average:</strong> ${average.toFixed(2)}<br>` +
// // //       `<strong>Grade:</strong> ${grade}`;
// // //   });

// // //   form.addEventListener('reset', function() {
// // //     resultDiv.textContent = '';
// // //   });
// // // });

// // let marks = 90

// // if (marks == 88 ){
// //   console.log("grad A")
// // }else{
// //   console.log("grad B")
// // }if (marks == 88) {
// //   console.log("gard D")
// // } else {
// //   console.log("gard C")
// // }

// // function navlinks() {
// //   console.log("home")
// //   console.log("about")
// //   console.log("blogs")
// //   console.log("contact")
// // }

// // navlinks()
// // navlinks()
// // navlinks()

// // function test (){
// //   let a = 10
// //   let b = 20
// //   let sum = a + b

// //   return sum
// // }

// // // let sum = test()
// // console.log((test()))

// //  function username (){
// //   let name = "neel"
// //   let age = "patel"
// //   let concatination = "neel"+"patel"

// //   return concatination
// //  }

// //  console.log(username())

// //  function sum(a,b){
// //   return a*a + b*b
// //  }

// //  let res = sum(20+30)

// //  console.log(res);

// //  sum(20)

// //  function all(){
// //   console.log("live in present")
// //   console.log("live in present")
// //   console.log("live in present")
// //  }

// //  console.log(all())

// // data types in js

// // let name = "neel"
// // let age = 23
// // let isstudent = true
// // let marks = null
// // let marks1 = undefined
// // // let marks2 = symbol("neel")
// // let marks3 = BigInt(12345678901234567890)
// // let marks4 = [1, 2, 3, 4, 5]
// // let marks5 = { name: "neel", age: 23, isStudent: true }
// // let marks6 = function() {
// //   console.log("This is a function");
// // };
// // let marks7 = new Date();
// // let marks8 = /abc/; // Regular expression

// // // numbers in js

// // let num1 = 10;
// // let num2 = 20;
// // let sum = num1 + num2;
// // console.log("Sum of num1 and num2 is: " + sum);

// // let fullName = "neel";
// // let msg = `my name is ${fullName}`
// // console.log(msg);

// // let surname = "patel";
// // let address = "chikhli"
// // let study = "btech"
// // let details = `my name is ${fullName} and my surname is ${surname} and i live in ${address} and i am studying ${study}`;
// // console.log(details)

// // let favnum = "6262";
// // console.log(favnum.length); // This will return 4 because strings have a length property

// // let text = "live in present";
// // text = text.toUpperCase(); // Convert to uppercase
// // console.log(text); // Output: LIVE IN PRESENT

// // text = text.toLowerCase(); // Convert to lowercase
// // console.log(text); // Output: live in present

// // text = text.replace("present", "future"); // Replace 'present' with 'future'
// // console.log(text); // Output: live in future

// // text = text.concat(" and beyond"); // Concatenate another string
// // console.log(text); // Output: live in future and beyond

// // text = text.trim(); // Remove leading and trailing whitespace
// // console.log(text); // Output: live in future and beyond

// // text = text.split(" "); // Split the string into an array of words
// // console.log(text); // Output: ['live', 'in', 'future', 'and',

// // text = text.includes("future"); // Check if 'future' is in the string
// // console.log(text); // Output: true

// // text = text.indexOf("and"); // Find the index of 'and'
// // console.log(text); // Output: 3

// // text = text.slice(0, 4); // Extract a substring from index 0 to 4
// // console.log(text); // Output: live

// // variable in javascript

// // let firstName = "neel"
// // console.log(firstName);

// // firstName = "patel"
// // console.log(firstName);

// // console.log(`neel`)

// // let firstName = `neel`
// // let role = `uiux designer & developer`

// // console.log(`my name is ${firstName} and my role is ${role}`);
// // console.log(`typeof role`)

// let fullName = "neel";
// let role = "uiux designer & developer";
// let salary = 50000;

// // document.getElementById("fristcode").textContent = `my name is ${fullName} and my role is ${role} and my salary is ${salary}`;

// console.log(
//   `my name is ${fullName} and my role is ${role} and my salary is ${salary}`
// );

// let students = 40;

// students = students + 10;
// students = students - 5;
// students = students * 2;
// students = students / 2;
// students = students % 3;
// students = students ** 2; // Exponentiation operator

// console.log(`the final number of students is ${students}`);

// let username;

// username = window.prompt("Enter your name:");

// console.log(`Hello, ${username}! Welcome to the JavaScript course.`);

// let person = {
//   firstName: "neel",
//   age: 23,
//   isEmployed: true,
//   sayHey: function () {
//     console.log("hii,i'm neel");
//   },
// };

// person.sayHey();
// console.log(person);

// let employers = {
//   lastName: "neel",
//   age: 23,
//   isCool: true,

//   hellotoemploye: function () {
//     console.log("hello neel");
//   },
// };

// employers.hellotoemploye();


// let success = "hardwork"

// if (success == "hardwor") {
//   console.log("you will be successful");
// }else{
//   console.log("you will not be successful");
// }


let filter = {
  product: "jeans",
  cap: "urban",
};

filter();
