/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

let numb1 = 61;
let numb2 = 78;

// 1st loop for odd numbers 61 to 100
while (numb1 <= 100) {
  if (numb1 % 2 !== 0) {
    console.log("Odd", numb1);
  }
  numb1++;
}

// 2nd loop for even numbers 78 to 98
while (numb2 <= 98) {
  if (numb2 % 2 === 0) {
    console.log("Even", numb2);
  }
  numb2++;
}

// // using single loop and separated with array

// let numb = 61;
// let oddNumbs = [];
// let evenNumbs = [];

// while (numb <= 100) {
//   // odd numbers from 61 to 100
//   if (numb >= 61 && numb <= 100 && numb % 2 !== 0) {
//     oddNumbs.push(numb);
//   }

//   // even numbers from 78 to 98
//   if (numb >= 78 && numb <= 98 && numb % 2 === 0) {
//     evenNumbs.push(numb);
//   }

//   numb++;
// }
// // odd numbers from 61 to 100
// console.log("Odd numbers from 61 to 100:");
// console.log(oddNumbs.join(", "));

// // even numbers from 78 to 98
// console.log("\nEven numbers from 78 to 98:");
// console.log(evenNumbs.join(", "));
