class Account {
  #password;
  #balance = 0;

  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
  }
  /*getBalance(email, password) {
    if (this.email == email && this.#password == password) {
      return this.#balance;
    } else {
      console.log("Não tens acesso!");
    }
  }*/

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance;
    } else {
      console.log("Não tens acesso!");
    }
  }

  #authenticate(email, password) {
    return this.email == email && this.#password == password;
  }
}

const userC = {
  email: "cunha@email.com",
  password: "adminadmin",
};

const newAccount = new Account(userC);

console.log(newAccount);

//newAccount.#password = "12345";
//newAccount.#balance = 99999999;

console.log(newAccount.getBalance());
console.log(newAccount.getBalance("email@mail.com", "12345"));
console.log(newAccount.getBalance("cunha@email.com", "adminadmin"));
