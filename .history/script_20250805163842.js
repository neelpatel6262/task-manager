

let intro = {
  name: "neel",
  age: 23,
  occupation: "uiux designer & developer",
  hobbies: ["reading", "coding", "gaming"],
  skills: {
    skill1: "HTML",
    skill2: "CSS",
    skill3: "JavaScript"
  },
  tools: function(){
    return "Figma, Adobe XD, Visual Studio Code";
  }
 
}

console.log(intro.hobbies[2])

console.log(intro.skills.skill1);

intro.name = "neelam";
intro.age = 24;
intro.occupation = "full stack developer";
intro.hobbies.push("traveling");

console.log(intro);
console.log(`Name: ${intro.name}`);
console.log(`Age: ${intro.age}`);
console.log(`Occupation: ${intro.occupation}`);
console.log(`Hobbies: ${intro.hobbies.join(", ")}`);


let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(`Random Number: ${randomNumber}`);