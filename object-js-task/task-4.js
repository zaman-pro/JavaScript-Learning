// Task-4
// Count the number of properties.

let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};

const keys = Object.keys(student); // to get properties

const values = Object.values(student); // to get values

const nOfProp = Object.keys(student).length; // to get property or value length or count

console.log(nOfProp);
