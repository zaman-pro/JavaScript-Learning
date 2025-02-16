/**
 * function takes an array as parameter
 * print the average of the odd numbers in the array
 */

function oddAvg(numbers) {
  let sum = 0;
  const odds = [];
  for (const number of numbers) {
    if (number % 2 !== 0) {
      odds.push(number);
    }
  }
  for (const number of odds) {
    sum += number;
  }
  const count = odds.length;
  const avg = sum / count;
  return avg;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 77, 17, 99];
const avg = oddAvg(numbers);
console.log("average of the odd numbers is:", avg);
