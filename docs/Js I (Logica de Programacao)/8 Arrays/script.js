const listaDeCompras = [];
console.log(listaDeCompras);

listaDeCompras[0] = "Arroz";
console.log(listaDeCompras);
console.log("-----------------------------------------");
console.log("Vamos add outra coisa à lista:");
listaDeCompras[1] = "Massa";
console.log(listaDeCompras);
console.log("-----------------------------------------");

console.log("Vamos add outra coisa à lista:");
listaDeCompras[2] = 7;
console.log(listaDeCompras);
console.log("-----------------------------------------");

listaDeCompras[4] = 5;
//Com isto Estamos a dar um valor à posição 4 mas o valor da posição 3, existe. Vai dizer que é undefined
console.log(listaDeCompras);
console.log(listaDeCompras[3]);
