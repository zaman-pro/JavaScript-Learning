/**
 * array has some duplicate elements
 *
 */

function original(array) {
  const nodupe = [];
  for (const item of array) {
    if (!nodupe.includes(item)) {
      nodupe.push(item);
    }
  }
  return nodupe;
}

const persons = [
  "Jarvis",
  "Kevin",
  "Claudia",
  "Shawn",
  "Darren",
  "Britney",
  "Claudia",
  "Darren",
  "Britney",
];
const numbers = [
  28390, 84947, 11636, 20528, 66948, 98498, 16224, 14769, 57806, 63281, 36957,
  52983, 99603, 95251, 56171, 66948, 98498, 16224, 14769, 57806, 63281, 36957,
];

const unique = original(persons);
const unique2 = original(numbers);
console.log(unique, unique2);
