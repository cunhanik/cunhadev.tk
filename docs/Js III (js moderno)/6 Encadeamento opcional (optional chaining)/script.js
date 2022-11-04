const user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [
    {
      name: "Marry",
      address: {
        street: "Some Street",
        number: 77,
      },
    },
  ],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "22",
    number: "998765432",
  },
};

console.log(user.friends[0]?.phone?.ddd); //Isto é igual a undefined (mas não dá erro)
//console.log(user.friends[0].phone.ddd); //Isto é igual a erro: Uncaught TypeError: Cannot read properties of undefined (reading 'ddd')

console.log(user?.brothers?.name); //Mesmo que as coisas não existam, não há erros na consola
//console.log(user.brothers.name);  //Podemos ver que aqui também vai dar erro: Uncaught TypeError: Cannot read properties of undefined (reading 'name')

//Basicamente o ?. serve para ler o que está atras e se não existir, ele diz-nos undefined e que não consegue ler o que está à frente...
//Outro ex:

console.log(user.brothers?.[5].name); //Isto é igual a undefined
//console.log(user.brothers[5].name); //Isto dá erro e diz que não consegue ler o [5], porque o brothers não existe
