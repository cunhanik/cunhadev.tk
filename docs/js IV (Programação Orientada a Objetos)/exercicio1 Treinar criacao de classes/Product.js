class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }
  addToStock(quantity) {
    this.inStock += quantity;
  }
  calculateDiscount(discount) {
    discount = (100 - discount) / 100;
    this.price = this.price * discount;
    //return this.price * ((100 - discount) / 100)
  }
}

const monitor = new Product("Monitor", "Monitor Benq 144hz", 100);
console.log(monitor);

const playStation = new Product("PlayStation", "PlayGames", 400);
console.log(playStation);

monitor.addToStock(2);
monitor.calculateDiscount("30");

console.log(monitor);
