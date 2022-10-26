const nome = prompt("Como te chamas turista?");
let pergunta = prompt("Ja visitaste algum País? Sim/Não");
let lista = "";
let visitas = 0;

while (pergunta === "Sim") {
  let paises = prompt("Que País foi esse?");
  visitas += 1;
  lista += " " + paises;
  let pergunta = prompt("Visitaste mais Países?");
}
alert(`Olá ${nome}, Visitaste ${visitas} Países: ${lista}`);
