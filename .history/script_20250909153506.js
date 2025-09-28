function updateLoveInfo(newFullName, newLifePartner) {
  love.fullName = newFullName;
  love.lifePartner = newLifePartner;
}

let love = {
  fullName: "John Doe",
  lifePartner: "Jane Smith"
};

console.log("Before update:", love);
updateLoveInfo("Alice Johnson", "Bob Brown");
console.log("After update:", love);