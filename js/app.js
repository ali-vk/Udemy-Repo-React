// import { apiKey } from "./util.js"

const hobbies = ["sports", "cooking"];
const newHobbies = ["Reading"];

const mergedHobbies = [...hobbies, ...newHobbies];

const user = {
  name: "Max",
  age: 23
}

const newUser = {
  isAdmin: true,
  ...user
}

console.log(newUser);