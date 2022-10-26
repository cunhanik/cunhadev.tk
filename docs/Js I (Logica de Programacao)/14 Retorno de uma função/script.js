function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
}

const resultado = calcularMedia(7, 2);
console.log(resultado);

function criarProduto(nome, preco) {
  const product = {
    nome, //nome:nome
    preco, //preco:preco
    stock: 1,
  };
  return product;
}

const laptop = criarProduto("Lenovo", 500);
console.log(laptop);
//OU
console.log(criarProduto("Lenovo", 500));

function areaRectangulo(base, altura) {
  //const area = base*altura
  //Podemos fazer isto diretamente:
  return base * altura;
}
console.log(areaRectangulo(3, 5));

function areaQuadrado(lado) {
  return areaRectangulo(lado, lado);
}
console.log(areaQuadrado(9));
//A função areaQuadrado vai chamar a função areaRectangulo para calcular a area do quadrado.

function ola() {
  let texto = "blablabla";
  return texto;
  texto = "ola mundo";
  console.log(texto);
}

console.log(ola());

function maiorDeIdade(idade) {
  if (idade > 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

console.log(maiorDeIdade(21));
console.log(maiorDeIdade(12));
