const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("rua das flores", 5, "bairroX", "Porto", "Porto");
const cunha = new Person("Claudio Cunha", addr);

console.log(cunha);
console.log(cunha.address.fullAddress());

/*SEGUNDA FORMA:
const Person = require("./Person");

const cunha = new Person("Claudio Cunha", "rua das flores", 5, "bairroX", "Porto", "Porto");

console.log(cunha);
console.log(cunha.address.fullAddress());



Continuação do ficheiro "Person.js"
*/
