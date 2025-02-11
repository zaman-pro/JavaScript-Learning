// Task 7: Grade Calculator
// Write a program that takes a student's score as input and assigns a grade based on the following criteria:

// A: 90-100

// B: 80-89

// C: 70-79

// D: 60-69

// F: Below 60

// ?We can change the value
let score = 65;

if (score > 100) {
  console.log("Invalid");
} else if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else if (score >= 60) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}
