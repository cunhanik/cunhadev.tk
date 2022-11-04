function sum(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0);
}

console.log(sum(2, 2));
console.log(sum(2, 2, 2, 2, 2, 2, 2));
console.log(sum(32, 24, 55, 57, 41, 39, 12, 6));
