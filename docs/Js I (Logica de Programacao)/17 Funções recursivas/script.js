function dividir(num) {
  console.log(num);
  if (num % 2 === 0) {
    dividir(num / 2);
  } else {
    return console.log(`Este numero não é par: ${num}`);
  }
}

dividir(4);

console.log("----------------------");

function fatorial(num) {
  console.log(`numero: ${num}`);
  if (num === 0) {
    return 1;
  } else if (num === 1) {
    return 1;
  } else {
    console.log(`${num} * !${num - 1}`);
    return num * fatorial(num - 1);
  }
}

console.log(fatorial(5));
