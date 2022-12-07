module.exports = class Account {
  #balance = 0;

  constructor(user) {
    this.user = user;
    this.deposits = [];
    this.loans = [];
    this.transfers = [];
  }

  get balance() {
    return this.#balance;
  }

  addDeposit(deposit) {
    this.#balance += deposit.value;
    this.deposits.push(deposit);
  }

  addLoan(loan) {
    this.#balance += loan.value;
    this.loans.push(loan);
  }

  addTransfer(transfer) {
    if (transfer.fromUser.email === this.user.email) {
      this.#balance -= transfer.value;
      this.transfers.push(transfer);
    } else if (transfer.toUser.email === this.user.email) {
      this.#balance += transfer.value;
      this.transfers.push(transfer);
    }
  }
};
