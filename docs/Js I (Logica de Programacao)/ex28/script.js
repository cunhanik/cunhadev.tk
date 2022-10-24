function calcular(a, b, operacao) {
  console.log("A realizar uma operação.");
  const resultado = operacao(a, b);
  return resultado;
}

function somar(x, y) {
  console.log("A realizar uma soma.");
  return x + y;
}

console.log(calcular(5, 2, somar));

console.log(
  calcular(10, 5, function (x, y) {
    console.log("A realizar uma subtração");
    return x - y;
  })
);

function mostrarElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
}

const list = ["maça", "banana", "laranja", "limao"];
for (let i = 0; i < list.length; i++) {
  mostrarElemento(list[i], i, list);
}

list.forEach(mostrarElemento);

list.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
});
