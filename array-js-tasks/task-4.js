/**

4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.


 */

const vehicles = {
  car: "audi",
  bike: "honda",
  bus: "bmw",
  train: "metro",
  "by cycle": "electric",
};
const firstNames = ["Barton", "Laura", "Domenic", "Raoul", "Donald"];
const age = 25;
const isStudent = true;
const emptyArray = [];
const emptyObject = {};

// console.log("Is 'vehicles' an array?", Array.isArray(vehicles));
// console.log("Is 'firstNames' an array?", Array.isArray(firstNames));
// console.log("Is 'age' an array?", Array.isArray(age));
// console.log("Is 'isStudent' an array?", Array.isArray(isStudent));
// console.log("Is 'emptyArray' an array?", Array.isArray(emptyArray));
// console.log("Is 'emptyObject' an array?", Array.isArray(emptyObject));

const varToCheck = {
  vehicles: {
    car: "audi",
    bike: "honda",
    bus: "bmw",
    train: "metro",
    "by cycle": "electric",
  },
  firstNames: ["Barton", "Laura", "Domenic", "Raoul", "Donald"],
  age: 25,
  isStudent: true,
  emptyArray: [],
  emptyObject: {},
};

// console.log(varToCheck);

for (let key in varToCheck) {
  //   console.log(key);

  Array.isArray(varToCheck[key])
    ? console.log(key, "is an Array!")
    : console.log(key, "is not an Array!!");
}

// console.log(Array.isArray(varToCheck));
