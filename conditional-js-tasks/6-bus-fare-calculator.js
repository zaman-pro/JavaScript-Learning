/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 70;
let isStudent = true;
let ticket = 800;

if (age < 10) {
  console.log("Children Free!");
  ticket *= 0;
} else if (isStudent) {
  console.log("Students get a 50% discount!");
  ticket *= 0.5;
} else if (age >= 60) {
  console.log("Sr citizens gets a 15% discount!");
  ticket *= 0.85;
} else {
  console.log("Regular ticket fare price:");
}

console.log("Total:", ticket, "tk");
