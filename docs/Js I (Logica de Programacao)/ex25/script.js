let pessoa = {
  nome: "Cunha",
  idade: 26,
  dizerola() {
    console.log(`Ola mundo, eu sou o ${this.nome}`);
  },
};

console.log(pessoa);
pessoa.dizerola();
