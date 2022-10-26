const baralho = [];
let opcao = "";

do {
  opcao = prompt(
    `Cartas do baralho: ${baralho.length} \n1. Add uma carta\n2. Puxar uma carta.\n3. Sair`
  );
  if (opcao == "1") {
    let novaCarta = prompt("Qual é a carta?");
    baralho.push(novaCarta);
  } else if (opcao == "2") {
    let tirarCarta = baralho.pop();
    if (!tirarCarta) {
      alert("Não há cartas no baralho");
    } else {
      alert(`Tiraste um(a) ${tirarCarta}`);
    }
  } else if (opcao > 3) {
    alert("Opção Inválida");
  }
} while (opcao != 3);

alert("Obrigado por jogares!");
