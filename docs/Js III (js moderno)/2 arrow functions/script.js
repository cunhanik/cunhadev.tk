function normalSum(a, b) {
  return a + b;
}

console.log(`Soma normal: ${normalSum(5, 12)}`);

const anonymousSum = function (a, b) {
  return a + b;
};

console.log(`Soma anônima: ${anonymousSum(5, 12)}`);

const arrowSum = (a, b) => {
  return a + b;
};

console.log(`Soma Arrow: ${arrowSum(5, 12)}`);

const arrowLine = (a, b) => a + b;

console.log(`Soma ArrowLine: ${arrowLine(5, 12)}`);

const towns = ["Porto", "Lisboa", "Porto-Covo", "asdasd", "lorem"];

const startingWithP = towns.filter((town) => town[0] === "P");
console.log(startingWithP);
