// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

var math = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.5;

var totalSubjects = 5;
var totalMarks = math + biology + chemistry + physics + bangla;
var average = totalMarks / totalSubjects;

console.log(average.toFixed(2));
