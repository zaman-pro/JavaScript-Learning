/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

let oddNumbs = [];
let evenNumbs = [];

// Find all the odd numbers from 61 to 100.
for (let i = 61; i <= 100; i++) {
  if (i % 2 !== 0) {
    oddNumbs.push(i);
  }

  // Find all the even numbers from 78 to 98.
  if (i >= 78 && i <= 98 && i % 2 === 0) {
    evenNumbs.push(i);
  }
}

console.log("all the odd numbers from 61 to 100");
console.log(oddNumbs);

console.log("\nall the even numbers from 78 to 98");
console.log(evenNumbs);
