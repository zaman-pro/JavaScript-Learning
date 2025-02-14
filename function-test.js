// Objective: write a function to give me the sum of all numbers in an array.

function total(arr1) {
  let sum = 0;
  //   for (let i = 0; i < arr1.length; i++) {
  //     sum += arr1[i];
  //   }
  for (const numbs of arr1) {
    sum += numbs;
  }
  return sum;
}

const numbs = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const sumOfAll = total(numbs);

console.log("sum of all number is:", sumOfAll);
