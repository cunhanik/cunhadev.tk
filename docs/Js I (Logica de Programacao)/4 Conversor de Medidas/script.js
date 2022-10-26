let valor = prompt("Escolhe um valor em metros:");
let converter = prompt(
  "Para que unidade queres converter: \na) milimetro(mm)\nb) centimetro(cm)\nc) decimetro(dm)\nd) decametro(dam)\ne) hectometro(hm)\nf) quilometro(km)"
);

let valorNumerico = parseFloat(valor);

switch (converter) {
  case "a":
    alert(
      `O teu numero ${valor}metros, em milimetros é: ${valorNumerico * 1000}mm`
    );
    break;
  case "b":
    alert(
      `O teu numero ${valor}metros, em centimetro é: ${valorNumerico * 100}cm`
    );
    break;
  case "c":
    alert(
      `O teu numero ${valor}metros, em decimetro é: ${valorNumerico * 10}dm`
    );
    break;
  case "d":
    alert(
      `O teu numero ${valor}metros, em decametro é:${valorNumerico / 10}dam`
    );
    break;
  case "e":
    alert(
      `O teu numero ${valor} metros, em hectometro é: ${valorNumerico / 100}hm`
    );
    break;
  case "f":
    alert(
      `O teu numero ${valor} metros, em quilometro é: ${valorNumerico / 1000}km`
    );
    break;
  default:
    alert("Não escolheste nenhuma das opções");
}
