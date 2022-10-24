/* 
let firstname = prompt("Qual é o teu nome?");
let lastname = prompt("Qual é o ultimo nome?");
let year = prompt("Qual é o teu ano?");
let res = 2022 - year;

window.alert(
  `Recrutado com sucesso!\n
    \nNome completo: ${firstname} ${lastname}
    \nIdade: ${res}`
);
*/

const n1 = prompt("Escolhe um numero:");
const n2 = prompt("Escolhe outro numero:");

const numero1 = parseFloat(n1);
const numero2 = parseFloat(n2);

const soma = numero1 + numero2;
const sub = numero1 - numero2;
const div = numero1 / numero2;
const mult = numero1 * numero2;

window.alert(
  `Resultados:
      \nsoma dos dois numeros: ${soma}
      \nsubtração dos dois numeros: ${sub}
      \ndivisão dos dois numeros: ${div}
      \nmultiplicação dos dois numeros: ${mult}`
);
