/**

3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.

 */

const books = ["html", "css", "", "python", "mongodb"];

let hasJavaScript = books.includes("javascript")
  ? console.log("Yes! You've a JavaScript book!")
  : console.log("Oops! You don't have a JavaScript book.");
