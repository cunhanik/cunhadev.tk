let speed = 80;

while (speed > 0) {
  alert(`O carro está em movimento, está a ${speed}km/h`);
  speed -= 20;
  alert(`Vamos diminuir 20km/h`);
  alert(`Agora a velocidade do teu carro é ${speed}`);
  if (speed === 40) {
    break;
  }
}
alert("O carro parou");
