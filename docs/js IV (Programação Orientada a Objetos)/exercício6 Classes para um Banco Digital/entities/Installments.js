module.exports = class Installments {
  constructor(value, installments) {
    this.value = value;
    this.installments = installments;
    this.status = "Pending";
  }
};
