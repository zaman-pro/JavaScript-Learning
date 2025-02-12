/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

let num1 = 20;
let num2 = 7;

let result;

if (num1 > num2) {
  result = num1 * 2;
} else {
  result = num1 + num2;
}

// ternary operator
// let result = num1 > num2 ? num1 * 2 : num1 + num2;

console.log(result);
