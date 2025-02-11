/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

let numb = 81;
let oddSum = 0;
let evenSum = 0;

while (numb <= 311) {
  // Display sum of all the odd numbers from 81 to 131.
  if (numb >= 81 && numb <= 131 && numb % 2 !== 0) {
    oddSum += numb;
  }

  // Display sum of all the even numbers from 206 to 311.
  if (numb >= 206 && numb <= 311 && numb % 2 === 0) {
    evenSum += numb;
  }
  numb++;
}

console.log("Sum of all the odd numbers from 81 to 131", oddSum);
console.log("Sum of all the even numbers from 206 to 311", evenSum);
