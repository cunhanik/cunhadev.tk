const Installments = require("./Installments");

module.exports = class Loan {
  static #interest = 1.05;

  constructor(value, installment) {
    this.value = value;
    this.installment = [];
    for (let i = 1; i <= installment; i++) {
      this.installment.push(
        new Installments((value * Loan.#interest) / installment, i)
      );
    }
    this.createdAt = new Date();
  }

  static get interest() {
    return Loan.#interest;
  }

  static set interest(interestPercentage) {
    Loan.#interest = 1 + interestPercentage / 100;
    /*Se a interest for 10; Esta conta faz com que fique a 1.10. Depois é so multiplicar por isso e 
    o nosso resultado fica com os juros de 10% acomulado*/
  }
};
