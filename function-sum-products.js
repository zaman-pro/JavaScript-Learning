// sum total of products price

const products = [
  { name: "shampoo", price: 250 },
  { name: "soap", price: 150 },
  { name: "shirt", price: 700 },
  { name: "pant", price: 1500 },
  { name: "half pant", price: 600 },
];
function getTotalPrice(products) {
  let sum = 0;

  for (const product of products) {
    console.log(product);
    sum += product.price;
  }
  return sum;
}

const total = getTotalPrice(products);
console.log("Total price is:", total);
