const App = require("./App.js");

App.createUser("cunha@email.com", "Claudio Cunha");
App.createUser("bea@email.com", "Beatriz Agulheiro");

App.addDeposit("cunha@email.com", 200);
App.addTransfer("cunha@email.com", "bea@email.com", 50);
App.changeLoanInterest(10);
App.addLoan(800, 10, "bea@email.com");

console.log(App.findUser("cunha@email.com"));
console.log(App.findUser("cunha@email.com").account);
console.log(App.findUser("bea@email.com"));
console.log(App.findUser("bea@email.com").account);
