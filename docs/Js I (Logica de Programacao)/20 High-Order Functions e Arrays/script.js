const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

//metodo Map -> Serve para fazer transformações em Arrays, criando um novo Array.
//Ou seja, ele usa um Array para ir buscar informações e cria outro Array para colocar essas informações

const nomesPersonagens = [];

for (let i = 0; i < personagens.length; i++) {
  nomesPersonagens.push(personagens[i].nome);
}
console.log(nomesPersonagens);

const nomesPersonagensMetodoMap = personagens.map(function (umaPersonagem) {
  return umaPersonagem.nome;
});

console.log(nomesPersonagensMetodoMap);

//metodo Filter ->Serve para filtrar elementos em Arrays, criando um novo Array.
//Ou seja, ele usa um Array para ir buscar informações especificas e cria outro Array para colocar essas informações

const guerreiros = [];

for (let i = 0; i < personagens.length; i++) {
  if (personagens[i].classe === "Guerreiro") {
    guerreiros.push(personagens[i]);
  }
}

console.log(guerreiros);

const guerreirosMetodoFilter = personagens.filter(function (personagem) {
  return personagem.classe === "Guerreiro";
});

console.log(guerreirosMetodoFilter);

//metodo Reduce ->Serve para transformarmos um Array em outro elemento/valor (array,objeto,numero,string), criando um novo Array.
//Vamos dar o exemplo de somar todos os niveis dos nossos personagens, com o Reduce isso vai dar apenas um numero (o resultado da soma de todos)
//Funciona desta maneira: ele passa pelo 1º elemento e guarda o seu valor, depois passa pelo 2ºelemento com acesso ao 1º elemento e agora guarda o valor da soma dos 2 (1º elemento + 2ºelemento),depois vai para o 3º elemento com acesso ao valor do anterior (soma do 1º+2º elemento) e guarda o valor da soma dos dois(soma do elemento anterior + 3º) ou dos tres (soma do 1º 2º 3º elemento)

const nivelTotal = personagens.reduce(function (valorAcomulado, personagem) {
  return valorAcomulado + personagem.nivel;
}, 0);

console.log(nivelTotal);

//Basicamente o que fizemos aqui foi:
//Criamos uma variavel que vai receber a lista com a função reduce..
//a função reduce recebe outra função com 2 parametros: valorAcomulado e personagem{
//valorAcomulado é o que queremos saber (total dos niveis) e personagem refere-se a cada personagem da lista personagens (é o mesmo que ter: for(let i=0;i<personagens.length;i++))
//return valorAcomulado + personagem.nivel
//},0); 0 é o valor que vamos dar ao nosso primeiro parametro "ValorAcomulado"
//Ou seja, o valorAcomulado é 0 e vai somar(+) com o valor do personagem.nivel, guarda esse valor e repete mas agora o valor acomulado ao invés de 0 é o valor dessa soma

//Outro exemplo do Reduce:
//Vamos pegar no Array personagens e transformá-lo num unico objeto(não é um Array) que vai agrupar as personagens que estão dentro da lista, por raça

const racas = personagens.reduce(function (valorAcomulado, personagem) {
  if (valorAcomulado[personagem.raca]) {
    //Se for True(se isto existir), devolve o que está por baixo. Se for falso(se isto não existir), devolve undefined
    valorAcomulado[personagem.raca].push(personagem);
  } else {
    valorAcomulado[personagem.raca] = [personagem];
  }
  return valorAcomulado;
}, {});

console.log(racas);
//Criamos uma variavel que vai guardar o resultado da função reduce
//função reduce vai receber outra função (anonima) com 2 parametros: valorAcomulado,personagem
//No fim da função, dizemos o que o parametro valorAcomulado vai ser (neste caso um objeto vazio): {}
//Dentro da função fazemos uma verificação para que SE valorAcomulado na posição [personagem.raca] existir, dá-mos um push da personagem toda para o nosso objeto vazio
//Se valorAcomulado na posição[personagem.raca] não existir, dá-mos um push da personagem toda para o nosso objeto vazio

//Metodo Sort -> Serve para ordenar Arrays, nós conseguimos ir buscar elementos de um Array e mudá-los de posição conforme o critério
//Ou seja, ele usa um Array para ir buscar informações e ordená-las, ao contrario dos outros metodos, este não cria um novo Array para guardar o resultado, este guarda automaticamente o resultado no proprio Array
//Funciona da seguinte forma: metodo sort recebe uma função, sempre com 2 argumentos (a,b) e basicamente ele vai comparar os primeiros dois e decide qual deles coloca primeiro, depois vai comparar o elemento 2 e 3, depois o 3 e 4, etc
//ex: numeros [1,2,9,7,5,4,3,99,21] o sort vai de 2 em 2 elementos e compara-os, o menor vem primeiro. primeiro compara o 1 e 2, depois o 2 e 9, depois o 9 e 7, etc
//Neste exemplo vamos ordenar o nosso Array personagens, baseando-nos no nivel das personagens

personagens.sort(function (personagemX, personagemY) {
  //Se o nivel do personageX (primeiro da lista) - o nivel do personagemY(segundo da lista), for positivo = numero positivo, ele coloca o personagemX para depois do personagemY(mais para o fim), se for negativo, ele coloca o personagemX para antes do personagemY(mais para o inicio)
  return personagemX.nivel - personagemY.nivel;
});

console.log(personagens);

//Para guardamos este resultado numa variavel, temos que utilizar o metodo slice(), que é o que copia os arrays, ou seja, podemos fazer uma copia do arrayoriginal mas ordenado: arrayOriginal.slice().sort(função), guardando isto numa variavel: const personagensOrdenados=personagens.slice().sort(function (personagemX, personagemY) {
const personagensOrdenadas = personagens
  .slice()
  .sort(function (personagemX, personagemY) {
    //Se o nivel do personageX (primeiro da lista) - o nivel do personagemY(segundo da lista) for positivo,
    return personagemX.nivel - personagemY.nivel;
  });

console.log(personagens);
