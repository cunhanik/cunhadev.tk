const word = prompt(
  "Escreve uma palavra que seja um palíndromo\n(igual da esquerda para a direita e da direita para a esquerda)\nex: ana"
);
let inverseWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  inverseWord += word[i];
}

if (inverseWord == word) {
  alert("Boa! A tua palavra é um palíndromo!");
} else {
  alert(`Essa palavra não é um palíndromo!\n${word} !== ${inverseWord}`);
}
