const laptop = {
  brand: "dell",
  price: 25000,
  color: "red",
  ram: "32gb",
  ssd: "250gb",
};

// for of: array
// if i use for of then i will get an error
// for (const prop

// delete laptop["ssd"]; // for delete property in a variable

// for in : object
for (const prop in laptop) {
  console.log(prop);
  console.log(laptop[prop]);
}
