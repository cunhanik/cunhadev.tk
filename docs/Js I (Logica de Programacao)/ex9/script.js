let moneytxt = prompt(`Quanto dinheiro tens?`);
let money = parseFloat(moneytxt);

while (true) {
  let desire = prompt(`Tens ${money}.\na) Add money\nb) Remove money\nc) Exit`);
  if (desire === "a") {
    let addtxt = prompt("Quanto dinheiro queres adicionar?");
    let add = parseFloat(addtxt);
    money += add;
  } else if (desire === "b") {
    let rmtxt = prompt("Quanto dinheiro queres remover?");
    let rm = parseFloat(rmtxt);
    money -= rm;
  } else {
    break;
  }
}

alert("Obrigado, ate à proxima!");
