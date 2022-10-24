const vagas = [];

function verVagas() {
  const verTxt = vagas.reduce(function (txt, vaga, indice) {
    txt += `${indice}. `;
    txt += `${vaga.nome} `;
    txt += `(${vaga.candidatos.length} candidatos)\n`;
    return txt;
  }, "");
  if (vagas.length == 0) {
    alert("Não há vagas disponiveis");
  } else {
    alert(verTxt);
  }
}

function criarVagas() {
  const nome = prompt(`Nome da Vaga:`);
  const descricao = prompt(`Breve descrição:`);
  const deadline = prompt(`Data limite (DD/MM/AAAA):`);

  if (nome.length <= 0 || descricao.length <= 0 || deadline.length <= 0) {
    alert(
      `Dados inválidos!\n\nNome: ${nome}\nDescrição: ${descricao}\nData limite: ${deadline}`
    );
    return;
  }

  const conf = confirm(
    `Tens a certeza que queres criar esta vaga?\n\nNome: ${nome}\nDescrição: ${descricao}\nData limite: ${deadline}`
  );
  if (conf) {
    const vaga = {
      nome: nome,
      descricao: descricao,
      deadline: deadline,
      candidatos: [],
    };
    vagas.push(vaga);
    alert(`Vaga criada com sucesso!`);
  }
}

function mostrarVaga() {
  const indice = prompt(`Qual é o indíce da vaga que queres ver?`);

  const vaga = vagas[indice];

  const candidatosTxt = vaga.candidatos.reduce(function (txt, candidato) {
    return `${txt}\n- ${candidato}`;
  }, "");
  alert(
    `\nVaga nº ${indice}\nNome: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData Limite: ${vaga.deadline}\nNumero candidatos: ${vaga.candidatos.length}\nCandidatos inscritos: ${candidatosTxt}`
  );
}

function inscreverCandidato() {
  const candidato = prompt(`Nome do candidato(a): `);
  const indice = prompt(`Informa o indíce da vaga que queres inscrever: `);
  const vaga = vagas[indice];

  const conf = confirm(
    `Deseja inscrever o candidato ${candidato} na vaga: ${indice}?\nNome da Vaga: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData limite: ${vaga.deadline}`
  );
  if (conf) {
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada!");
  }
}

function apagarVaga() {
  if (vagas <= 0) {
    alert(`Não há vagas para apagar!`);
    return;
  }
  const indice = prompt("Vaga que pretendes apagar:");

  const vaga = vagas[indice];

  const conf = confirm(
    `Tens a certeza que queres apagar esta vaga: Vaga do indínce: ${indice} ?\n\nNome da Vaga: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData limite: ${vaga.deadline}`
  );
  if (conf) {
    vagas.splice(indice, 1);
    alert("Vaga Apagada!");
  }
}

function mostrarMenu() {
  const option = prompt(
    "Escolhe uma opção:\n\n1. Ver vagas de emprego.\n2. Criar uma nova vaga\n3. Ver uma vaga específica\n4. Increver um candidato\n5. Apagar uma vaga\n6. Sair  "
  );
  return option;
}

function executarTudo() {
  let option = "";
  do {
    option = mostrarMenu();
    if (option == 1) {
      verVagas();
    } else if (option == 2) {
      criarVagas();
    } else if (option == 3) {
      mostrarVaga();
    } else if (option == 4) {
      inscreverCandidato();
    } else if (option == 5) {
      apagarVaga();
    } else if (option < 0 || option > 6) {
      alert("Opção invalida!");
    }
  } while (option != "6");
}

executarTudo();
alert("Obrigado, Boa sorte!");
