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


if (marks == 90 ){
  console.log("grad A")
}
