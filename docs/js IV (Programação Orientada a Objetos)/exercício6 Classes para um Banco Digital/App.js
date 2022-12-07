const Deposit = require("./entities/Deposit");
const Loan = require("./entities/Loan");
const Transfer = require("./entities/Transfer");
const User = require("./entities/User");

module.exports = class App {
  static #users = [];

  static findUser(email) {
    const user = this.#users.find((u) => u.email === email);
    return user ?? null;
  }

  static createUser(email, name) {
    const userExists = App.findUser(email);
    if (!userExists) {
      this.#users.push(new User(name, email));
    }
  }

  static addDeposit(email, value) {
    const userExists = App.findUser(email);
    if (userExists) {
      const newDeposit = new Deposit(value);
      userExists.account.addDeposit(newDeposit);
    }
  }

  static addTransfer(fromUserEmail, toUserEmail, value) {
    const fromUser = App.findUser(fromUserEmail);
    const toUser = App.findUser(toUserEmail);
    if (fromUser && toUser) {
      const newTransfer = new Transfer(fromUser, toUser, value);
      fromUser.account.addTransfer(newTransfer);
      toUser.account.addTransfer(newTransfer);
    }
  }

  static addLoan(loan, installment, email) {
    const userExists = App.findUser(email);
    if (userExists) {
      const newLoan = new Loan(loan, installment, email);
      userExists.account.addLoan(newLoan);
    }
  }

  static changeLoanInterest(interestPercentage) {
    Loan.interest = interestPercentage;
  }
};
