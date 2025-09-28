// // Wait for the DOM to load
// window.addEventListener('DOMContentLoaded', function() {
//   const form = document.querySelector('form');
//   const inputs = form.querySelectorAll('input[type="number"]');

//   // Create a result display element
//   const resultDiv = document.createElement('div');
//   resultDiv.className = 'result';
//   form.appendChild(resultDiv);

//   form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent page reload

//     let total = 0;
//     let count = 0;
//     let values = [];
//     inputs.forEach(input => {
//       const value = parseFloat(input.value);
//       if (!isNaN(value)) {
//         total += value;
//         count++;
//         values.push(value);
//       }
//     });

//     if (count === 0) {
//       resultDiv.textContent = 'Please enter at least one grade.';
//       return;
//     }

//     const average = total / count;
//     let grade = '';
//     if (average >= 90) grade = 'A';
//     else if (average >= 80) grade = 'B';
//     else if (average >= 70) grade = 'C';
//     else if (average >= 60) grade = 'D';
//     else grade = 'F';

//     resultDiv.innerHTML =
//       `<strong>Total:</strong> ${total}<br>` +
//       `<strong>Average:</strong> ${average.toFixed(2)}<br>` +
//       `<strong>Grade:</strong> ${grade}`;
//   });

//   form.addEventListener('reset', function() {
//     resultDiv.textContent = '';
//   });
// });
 

let marks = 90


if (marks == 88 ){
  console.log("grad A")
}else{
  console.log("grad B")
}if (marks == 88) {
  console.log("gard D")
} else {
  console.log("gard C")
}



function navlinks() {
  console.log("home")
  console.log("about")
  console.log("blogs")
  console.log("contact")
}

navlinks()
navlinks()
navlinks()


function test (){
  let a = 10
  let b = 20
  let sum = a + b

  return sum
}


// let sum = test()
console.log((test()))


 function username (){
  let name = "neel"
  let age = "patel"
  let concatination = "neel"+"patel"

  return concatination
 }


 console.log(username())



 function sum(a,b){
  return a*a + b*b
 }

 let res = sum(20+30)

 console.log(res);
 

 sum(20)




 function all(){
  console.log("live in present")
  console.log("live in present")
  console.log("live in present")
 }


 console.log(all())