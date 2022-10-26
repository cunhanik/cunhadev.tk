let nome = "prop";
console.log(nome);

let objeto = {};
console.log(objeto);

objeto.prop = "Olá, mundo!";
console.log(objeto);
console.log(objeto.prop);

console.log(objeto[nome]);

let verificar = objeto.prop === objeto["prop"];
console.log(verificar);

let verificar2 = objeto.prop === objeto[nome];
console.log(verificar2);

let verificar3 = objeto.prop === objeto["pro" + "p"];
console.log(verificar3);

let funcao = "log";
console[funcao]("Surprise!");

let pessoa = {};
pessoa.nome = "Cunha";
pessoa.idade = 26;
console.log(pessoa);
pessoa.familia = ["Mãe", "Pai", "Bea", "Nuria", "Carlota", "maki"];
pessoa.morada = {
  rua: "Rua das Flores",
  numeroPorta: 22,
  numeroEntrada: 40,
  zonaDaCidade: "Centro",
};
