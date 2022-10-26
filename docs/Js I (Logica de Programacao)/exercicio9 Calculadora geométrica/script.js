function mostrarMenu() {
  return prompt(
    `Escolhe uma das opções:\n\n1. Calcular a área do triângulo\n2. Calcular a área do retangulo\n3. Calcular a área do quadrado.\n4. Calcular a área do trapézio\n5. Calcular a área do pi\n6. Exit`
  );
}

function areaDoTriangulo(a, b) {
  a = prompt("Base do Triangulo:");
  b = prompt("Altura do Triangulo:");
  return (a * b) / 2;
}

function areaDoRetangulo(a, b) {
  a = prompt("Base do Retangulo:");
  b = prompt("Altura do Retangulo:");
  return a * b;
}

function areaDoQuadrado(a) {
  a = prompt("lado do Quadrado:");
  return a * a;
}

function areaDoTrapezio(a, b, c) {
  a = prompt("Base Maior do Trapézio:");
  b = prompt("Base menor do Trapézio:");
  c = prompt("Altura do Trapézio:");
  return ((a + b) * c) / 2;
}

let pi = 3.14;

function areaDoCirculo() {
  const raio = prompt("raio do Circulo: ");
  return (pi * raio) ^ 2;
}

function executar() {
  let option = "";
  do {
    let area = "";
    option = mostrarMenu();
    if (option == 1) {
      area = areaDoTriangulo();
    } else if (option == 2) {
      area = areaDoRetangulo();
    } else if (option == 3) {
      area = areaDoQuadrado();
    } else if (option == 4) {
      area = areaDoTrapezio();
    } else if (option == 5) {
      area = areaDoCirculo();
    }
    if (area) {
      alert(`O resultado é: ${area}`);
    }
  } while (option != 6);
}

executar();
alert("Obrigado.");
