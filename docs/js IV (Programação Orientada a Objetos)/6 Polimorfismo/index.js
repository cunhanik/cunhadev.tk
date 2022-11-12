class Vehicle {
  move() {
    console.log("O veículo esá a mover-se");
  }
}

class Car extends Vehicle {
  move(speed) {
    console.log(`O carro está a mover-se a ${speed} km/h`);
  }
}

class Bike extends Vehicle {
  move(speed) {
    console.log(`O navio está a mover-se a ${speed} km/h`);
  }
}

class Ship extends Vehicle {
  move(speed) {
    console.log(`O navio está a mover-se a ${speed} km/h`);
  }
}

const ferrari = new Car();
const ktm = new Bike();
const titanic = new Ship();

ferrari.move(280);
ktm.move(20);
titanic.move(39);

function start(vehicle) {
  console.log("A iniciar um veículo...");
  vehicle.move();
}

start(ferrari);
start(ktm);
start(titanic);
