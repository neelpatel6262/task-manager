


// let webdev = {
//   name: "Web Development",
//   description: "Creating websites and web applications using HTML, CSS, and JavaScript.",
//   technologies: ["HTML", "CSS", "JavaScript"],
//   getInfo: function() {
//     return `${this.name}: ${this.description}`;
//   }
// }

// console.log(webdev.getInfo());

// console.log(webdev.technologies.join(", "));

btn.addEventListener("click", function() {
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let technologies = document.getElementById("technologies").value.split(",");

  let webdev = {
    name: name,
    description: description,
    technologies: technologies,
    getInfo: function() {
      return `${this.name}: ${this.description}`;
    }
  };

  console.log(webdev.getInfo());
  console.log(webdev.technologies.join(", "));
});