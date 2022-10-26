const array = ["Cunha", "Bea", "Maria", "Carlota"];
console.log(array);

//Adicionar Elementos
//push -> Serve para adicionarmos alguma coisa no fim do array e podemos ficar com ele guardado porque o push retorna o elemento que acrescenta(ultimo elemento)

let possivelFilha = array.push("Maria Francisca");
console.log(array);
console.log(possivelFilha);

array.push("Maria Francisca");
array.push("Maria Francisca");
console.log(array);

//unshift -> Serve para adicionarmos alguma coisa no inicio do array e podemos ficar com ele guardado porque o unshift retorna o elemento que adiciona(primeiro elemento)
let criacao = array.unshift("PAIS");
console.log(array);
console.log(criacao);

//Remover Elementos
//pop -> Serve para removermos o ultimo elemento do array e podemos ficar com ele guardado porque o pop retorna o elemento que tira(ultimo elemento)
const lastElement = array.pop();
console.log(array);
console.log(lastElement);

//shift -> Serve para removermos o primeiro elemento do array e podemos ficar com ele guardado porque o pop retorna o elemento que tira(ultimo elemento)
let firstElement = array.shift("PAIS");
console.log(array);
console.log(firstElement);

//Pesquisar um Elemento
//includes -> Serve para nos dizer se algo existe na nossa lista, com os valores True ou False
const inclui = array.includes("Bea");
console.log(inclui);

//indexOf -> Serve para nos dizer se algo existe na nossa lista, com a posição desse valor. Quando não existe: -1
const indice = array.indexOf("Bea");
console.log(indice);

//cortar e concatenar (juntar)
//slice(cortar) -> Serve para copiar e colar elementos de um Array de uma determinada posição. Numeros negativos são contados do fim para o inicio, sendo que -1 é o ultimo, -2 penultimo, etc...
const copia = array.slice(2, 4);
const copiaLast = array.slice(-1, -3);
console.log(copia);
console.log(copiaLast);

//concatenar(juntar) -> Serve para acrescentar outros Arrays e elementos a um array.
const secondArray = [1, 2, 3, 4, 5];
const thirdArray = ["Familia", "Amor", "Paz"];
const sociedade = array.concat(secondArray, thirdArray, "TUDO");
console.log(sociedade);

//Substituição dos elementos
//splice -> Serve para substituir algo da lista por algo que queremos. Funciona desta maneira: (oQueQueremosSubstituir,quantosElementos(começando no que escolhemos no inicio), peloQueQueremosSubstituir)
console.log(array);
const sub = array.splice(indice, 1, "Bizica");
//Em cima, ja tinhamos usado a variavel indice para determinarmos a posição da string "Bea". Deu-nos a posição [1]
//Então o splice vai encontrar a variavel indice (posição 1), e subistituir 1 elemento desde essa posição [1](indice) e subistutir por: "Bizica"
console.log(sub);
console.log(array);

//iterar(passar individualmente) pelos elementos ->
for (let teste = 0; teste < sociedade.length; teste++) {
  const element = sociedade[teste];
  console.log(`${element} está na posição ${teste}`);
}
