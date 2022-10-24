let resultado = prompt("Escolhe uma letra: \n a)\n b) \n c)");

switch (resultado) {
  case "a":
    alert("O resultado que escolheste foi a letra a)");
    break;
  case "b":
    alert("O resultado que escolheste foi a letra b)");
    break;
  case "c":
    alert("O resultado que escolheste foi a letra c)");
    break;
  default:
    alert("Não escolheste nenhuma das opções.");
}
