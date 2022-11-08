class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  login(email, password) {
    if (email == this.email && password == this.password) {
      console.log("Welcome");
    } else {
      console.log("Wrong Values");
    }
  }
}

const cunha = new User("Cláudio Cunha", "cunha@email.com", "12345");
console.log(cunha);
cunha.login("cunha@email.com", "12345");
console.log("----------------------------------------");
console.log("----------------------------------------");
console.log(cunha);
cunha.login("cunha@email.pt", "0000");
