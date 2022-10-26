let velocidade = 0;

do {
  alert(`A velocidade do veículo é ${velocidade}km/h`);
  velocidade -= 20;
} while (velocidade > 0);

alert(`A velocidade final é de ${velocidade}km/h`);
