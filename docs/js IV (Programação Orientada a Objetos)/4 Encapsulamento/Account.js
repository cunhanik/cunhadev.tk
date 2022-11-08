class Account {
  constructor(user) {
    this.email = user.email;
    this.password = user.password;
    this.balance = 0;
  }
}

const userX = {
  email: "cunha@email.com",
  password: "adminadmin",
};

const newAccount = new Account(userX);

console.log(newAccount);

newAccount.password = "Mudei-te a pw";

console.log(newAccount);

//Vou fazer as alterações noutro ficheiro "Account2.js" -->
