const myLife = {
  name: "Peter",
  age: 25,
  address: "New York",
  hobby: {
    reading: "books",
    watching: "movies",
    workout: "calisthenics",
  },
};

// to call nested object
console.log(myLife.hobby.workout);
console.log(myLife["hobby"]["workout"]);
