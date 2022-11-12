class Wallet {
  #amount;
  #username;

  constructor() {
    this.#amount = 109.99 * 100; /*Isto vai ser salvo
        COMO 10999, SEM VIRGULAS/PONTOS, só para criarmos uma "regra" que faça com
        que guarde sempre um numero inteiro;*/
  }

  get amount() {
    return this.#amount / 100;
  }

  set username(newUsername) {
    if (typeof newUsername === "string") {
      this.#username = newUsername;
    } else {
      console.log("Username must be of type string");
    }
  }

  get username() {
    return this.#username;
  }
}

myWallet = new Wallet();
console.log(myWallet.amount);
myWallet.username = "Cunha";
console.log(myWallet.username);
myWallet.username += "Dev";
console.log(myWallet.username);
myWallet.username = 10;
myWallet.username = true;
myWallet.username = "Cláudio Cunha";
console.log(myWallet.username);
