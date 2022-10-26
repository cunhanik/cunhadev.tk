function dobro(x) {
  alert(`O dobro de ${x} é ${x * 2}`);
}

dobro(22);
dobro();

function frase(name) {
  alert(`Olá, ${name}!`);
}

frase("Alice");
frase();

function frase2(name2 = "Mundo") {
  alert(`Olá, ${name2}!`);
}

frase2("Quim");
frase2();

function utilizador(nome, email, senha, tipo = "admin") {
  //Dica: Os parâmetros que tenham um valor default(neste caso tipo="admin"), precisam de estar no fim*
  //*dos parametros para que o utilizador não precise de preencher esse parâmetro e que ganhe o valor default.
  const usuario = {
    nome, //Isto é o mesmo que ter-> nome:nome
    email, //Isto é o mesmo que ter-> email:email
    senha: senha,
    tipo: tipo,
  };
  console.log(usuario);
}

utilizador("Cunha", "cunha@mail.com", "1234");
utilizador("Cunha", "cunha@mail.com", "1234", "utilizador");

function objetoComoParametro(utilizador){
    utilizador.nome
    utilizador.email
}

const dadosDoUtilizador = {
    nome: "",
    telefone: "",
    email: "",
    pw: "",
    morada: "",
    aniversario: ""
}

objetoComoParametro(dadosDoUtilizador )