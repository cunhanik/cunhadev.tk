let number = prompt("Escolhe um numero de 1 a 20");
let x = parseFloat(number);
let resultado = "";

for (y = 1; y < 21; y++) {
  resultado += `${x} * ${y} = ${x * y} \n `;
  if (x > 20) {
    alert("Isso é um numero maior ( > ) que 20");
    break;
  }
}
alert(`O resultado da tabuada do numero ${number} é:\n ${resultado}`);
