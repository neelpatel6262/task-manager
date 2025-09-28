

let intro = {
  name: "neel",
  age: 23,
  occupation: "uiux designer & developer",
  hobbies: ["reading", "coding", "gaming"]
}

intro.name = "neelam";
intro.age = 24;
intro.occupation = "full stack developer";
intro.hobbies.push("traveling");

console.log(intro);
console.log(`Name: ${intro.name}`);
console.log(`Age: ${intro.age}`);
console.log(`Occupation: ${intro.occupation}`);
console.log(`Hobbies: ${intro.hobbies.join(", ")}`);
