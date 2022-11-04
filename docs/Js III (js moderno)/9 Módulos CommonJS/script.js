function first() {
  console.log("Primeiro o Modulo principal");
}

const ficheiro = require("./ficheiro");
const x = require("./x");

console.log(first());
console.log(ficheiro());
console.log(x());
