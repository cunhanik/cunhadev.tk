let option = "";
let imoveis = [];

do {
  option = prompt(
    `Imoveis: ${imoveis.length} \n\nEscolhe uma opção:\n1. Criar Venda\n2. Mostrar todos os imoveis disponiveis\n3. Exit`
  );
  if (option == 1) {
    const imovel = {};
    imovel.nome = prompt("Nome do proprietario:");
    imovel.quartos = prompt("Quantidade de quartos:");
    imovel.wcs = prompt("Numero de WC:");
    imovel.garagem = prompt("Garagem: (Sim/Não)");
    const conf = confirm(
      `Tens a certeza que queres guardar este imovel?\n\nProprietario: ${imovel.nome}\nQuartos: ${imovel.quartos}\nWC: ${imovel.wcs}\nGaragem: ${imovel.garagem}`
    );
    if (conf) {
      imoveis.push(imovel);
    }
  } else if (option == 2) {
    for (let i = 0; i < imoveis.length; i++) {
      alert(
        `${i + 1}º Imovel:\n\nProprietario: ${imoveis[i].nome}\nQuartos: ${
          imoveis[i].quartos
        }\nNº WC: ${imoveis[i].wcs}\nGaragem: ${imoveis[i].garagem}`
      );
    }
  } else if (option > 3) {
    alert("Opção inválida.");
  }
} while (option != 3);

alert("Obrigado!");
