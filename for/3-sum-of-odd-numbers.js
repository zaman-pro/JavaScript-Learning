/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

let sumOdd = 0;
let sumEven = 0;

for (let i = 51; i <= 129; i++) {
  // sum of all the odd numbers from 91 to 129
  if (i >= 91 && i % 2 !== 0) {
    sumOdd += i;
  }

  // sum of all the even numbers from 51 to 85
  if (i <= 85 && i % 2 === 0) {
    sumEven += i;
  }
}

console.log("sum of all the odd numbers from 91 to 129", sumOdd);
console.log("sum of all the even numbers from 51 to 85", sumEven);
