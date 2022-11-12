class Reservation {
  constructor(guests, room, days) {
    this.guests = guests;
    this.room = room;
    this.days = days;
    this.total = days * Reservation.baseFee;
  }

  static baseFee = 150;

  static showBaseFee() {
    console.log(`Base Fee is: ${Reservation.baseFee}`);
  }

  static get premiumFee() {
    return (Reservation.baseFee = Reservation.baseFee * 1.5);
  }
}

console.log("Quarto normal");
Reservation.showBaseFee();
const res1 = new Reservation(3, "201", 5);
console.log(res1);
console.log(
  "==============================================================================="
);
console.log("Quarto premium");
Reservation.baseFee = 200;
const res2 = new Reservation(2, "504", 5);
console.log(`Premium Fee is: ${Reservation.premiumFee}€`);
console.log(res2);
