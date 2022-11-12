class Property {
  constructor(price, area) {
    this.price = price;
    this.area = area;
  }

  getPricePerSquareMeter() {
    return this.price / this.area;
  }
}

class House extends Property {}

const land = new Property(500000, 200);
const someHouse = new House(200000, 120);

console.log(land);
console.log(someHouse);

console.log(someHouse.getPricePerSquareMeter());

console.log(someHouse instanceof House);
console.log(someHouse instanceof Property);

class Apartment extends Property {
  constructor(number, price, area) {
    super(price, area);
    this.number = number;
  }
  getFloor() {
    return `O teu Apartamento está no: ${this.number.slice(
      0,
      -2
    )}º Andar`; /*Aqui usamos o método slice() (a pensar que
    nos vão dar uma string) para dizer que queremos guardar uma parte dessa
    string: Queremos a string toda (0) excepto os ultimos 2 caracteres (-2). o
    -1 refere-se ao fim da string, o -2 é o penultimo caractere*/
  }
}

const apt = new Apartment("201", 350000, 160);
console.log(apt);

console.log(apt.getFloor());
