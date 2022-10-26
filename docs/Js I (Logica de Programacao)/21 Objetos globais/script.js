//Exitem muitos objetos globais, ex:
//Object
//Array
//String
//Number
//Date
//Math

let pessoa = {};
let animal = Object();
console.log(typeof pessoa);
console.log(typeof animal);

let pessoa1 = { nome: "jose", idade: 30 };
let animal1 = Object({ nome: "tigre", idade: 15 });
console.log(pessoa1);
console.log(animal1);

let lista = [];
let lista2 = Array();
console.log(typeof lista);
console.log(typeof lista2);

let lista3 = [1, 2, 3, 4];
let lista4 = Array(1, 2, 3, 4);
console.log(lista3);
console.log(lista4);

let txt = "Olá";
let txt2 = String("Mundo");
console.log(typeof txt);
console.log(typeof txt2);
console.log(txt);
console.log(txt2);

let dia = Date();
console.log(dia);

//Estes objetos globais tambem possuem propriedades e funções, ex:
Number;
console.log(Number.isInteger(26.3));
console.log(Number.isInteger(26));

Math;
let piMaisDez = Math.PI + 10;
console.log(piMaisDez);

//Potencia
console.log(Math.pow(2, 3));

//Raíz quadrada
console.log(Math.sqrt(144));
