"use strict";

//media aritmética simples
var avg = function avg() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var sum = numbers.reduce(function (accum, num) {
    return accum + num;
  }, 0);
  return sum / numbers.length;
};
console.log("M\xE9dia aritm\xE9tica simples: ".concat(avg(2, 6, 3, 7, 4)));

//media ponderada
var weightedAverage = function weightedAverage() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (accum, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return accum + number * weight;
  }, 0);
  var weightSum = entries.reduce(function (accum, entry) {
    return accum + entry.weight;
  }, 0);
  return sum / weightSum;
};
console.log("M\xE9dia ponderada: ".concat(weightedAverage({
  number: 9,
  weight: 3
}, {
  number: 7,
  weight: 1
}, {
  number: 10,
  weight: 1
})));

//mediana
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var orderedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    //Se o numero de elementos for ímpar, nós queremos o numero do meio
    return orderedNumbers[middle];
  }
  //Se o numero for par, nunca vai sobrar um elemento no meio, vai sempre sobrar 2, então nós queremos que esses dois numeros se somem e dividam por 2
  //Para ir buscar os numeros do meio da lista, usámos o middle de cima e o middle-1, para acedermos o numero ao lado do middle, para assim fazermos a conta
  var firstMedian = orderedNumbers[middle - 1];
  var secondMedian = orderedNumbers[middle];
  return avg(firstMedian, secondMedian);
};
console.log("Mediana par: ".concat(median(1, 2, 3, 4, 5, 6)));
console.log("Mediana impar: ".concat(median(1, 2, 3, 4, 5, 6, 7)));

//moda
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  //[ [n,qtt], [n, qtt], [n, qtt] ]
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num == n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log("Mode: ".concat(mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));
