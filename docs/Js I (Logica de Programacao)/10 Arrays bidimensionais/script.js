const array = [
  ["1º Nivel", "2º Nivel", "3º Nivel"],
  ["4º Nivel", "5º Nivel", "6º Nivel"],
  ["7º Nivel", "8º Nivel", "9º Nivel"],
];
console.log(array);
console.log(array[0]);
console.log(array[(1)[1]]);
console.table(array);
array.push(["Nova linha 10º", "Nova linha 11º", "Nova linha 12º"]);
array[1].push("Nova coluna 1");
console.table(array);

for (i = 0; i < array[i].length; i++) {
  for (j = 0; j < array[i].length; j++) {
    console.log(array[i][j]);
  }
}
