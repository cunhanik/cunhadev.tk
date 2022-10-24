let options = prompt(
  `Escolhe uma das seguintes opções:\na) Mensagem 1\nb) Mensagem 2\nc) Mensagem 3\nd) Mensagem 4\ne) Encerrar`
);

while (options != "e") {
  if (options == "a") {
    alert("Opção A");
  } else if (options == "b") {
    alert("Opção B");
  } else if (options == "c") {
    alert("Opção c");
  } else if (options == "d") {
    alert("Opção d");
  } else {
    break;
  }
  options = prompt(
    `Escolhe uma das seguintes opções:\na) Mensagem 1\nb) Mensagem 2\nc) Mensagem 3\nd) Mensagem 4\ne) Encerrar`
  );
}
alert("A encerrar...");
