const line = "I am a web developer!";

let reverse = "";
for (letter of line) {
  reverse = letter + reverse;
}
console.log(reverse);
