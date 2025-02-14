Problem: 2;

// Given an array of products, each with a category, separate them into two arrays:one for electronics and one for clothing. Store the result in an object.

// Input:

// const products = [
//   { name: "laptop", category: "electronics" },
//   { name: "Tshirt ", category: "clothing" },
//   { name: "headphones", category: "electronics" },
//   { name: "jeans", category: "clothing" },
// ];

// output:

// {
//   electronics: ["laptop", "headphones"];
//   clothing: ["Tshirt", "jeans"];
// }

const products = [
  { name: "laptop", category: "electronics" },
  { name: "Tshirt ", category: "clothing" },
  { name: "headphones", category: "electronics" },
  { name: "jeans", category: "clothing" },
];

for (let i = 0; i < products.length; i++) {
  console.log(products[i].name);
  console.log(products[i].category);
}
