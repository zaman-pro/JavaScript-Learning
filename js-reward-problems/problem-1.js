// Problem:1
// given an array of product names, remove duplicates while preserving the original order. Use a loop to achieve this without defining a function.

// example input:
// ["laptop", "phone", "laptop", "tablet", "phone", "tablet"];

// example output:
// ["laptop", "phone", "tablet"];

const products = ["laptop", "phone", "laptop", "tablet", "phone", "tablet"];

const originalProducts = [];

for (let i = 0; i < products.length; i++) {
  //   console.log(products[i]);
  if (!originalProducts.includes(products[i])) {
    originalProducts.push(products[i]);
    // console.log(originalProducts);
  }
}
console.log(originalProducts);
