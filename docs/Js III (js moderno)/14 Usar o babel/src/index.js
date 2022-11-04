//media aritmética simples
const avg = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0);
  return sum / numbers.length;
};

console.log(`Média aritmética simples: ${avg(2, 6, 3, 7, 4)}`);

//media ponderada
const weightedAverage = (...entries) => {
  const sum = entries.reduce(
    (accum, { number, weight }) => accum + number * weight,
    0
  );
  const weightSum = entries.reduce((accum, entry) => accum + entry.weight, 0);
  return sum / weightSum;
};

console.log(
  `Média ponderada: ${weightedAverage(
    { number: 9, weight: 3 },
    { number: 7, weight: 1 },
    { number: 10, weight: 1 }
  )}`
);

//mediana
const median = (...numbers) => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    //Se o numero de elementos for ímpar, nós queremos o numero do meio
    return orderedNumbers[middle];
  }
  //Se o numero for par, nunca vai sobrar um elemento no meio, vai sempre sobrar 2, então nós queremos que esses dois numeros se somem e dividam por 2
  //Para ir buscar os numeros do meio da lista, usámos o middle de cima e o middle-1, para acedermos o numero ao lado do middle, para assim fazermos a conta
  const firstMedian = orderedNumbers[middle - 1];
  const secondMedian = orderedNumbers[middle];
  return avg(firstMedian, secondMedian);
};

console.log(`Mediana par: ${median(1, 2, 3, 4, 5, 6)}`);
console.log(`Mediana impar: ${median(1, 2, 3, 4, 5, 6, 7)}`);

//moda
const mode = (...numbers) => {
  //[ [n,qtt], [n, qtt], [n, qtt] ]
  const quantities = numbers.map((num) => {
    return [num, numbers.filter((n) => num == n).length];
  });
  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
};

console.log(`Mode: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`);
