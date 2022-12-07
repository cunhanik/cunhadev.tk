//Promises

//Funcionamento do then()
const myPromise = new Promise((resolve, reject) => {
  const name = "Claudio Cunha";

  if (name === "Claudio Cunha") {
    resolve("Accepted name!");
  } else {
    reject("User doesn't exists");
  }
});

myPromise.then((data) => {
  console.log(data);
});

//Manipular o dado com o then()
const myPromise2 = new Promise((resolve, reject) => {
  const name = "Claudio Cunha";

  if (name === "Claudio Cunha") {
    resolve("Accepted name!");
  } else {
    reject("User doesn't exists");
  }
});

myPromise2
  .then((data) => {
    return data.toLowerCase();
  })
  .then((nameLowerCase) => {
    console.log(nameLowerCase);
  });

const myPromise3 = new Promise((resolve, reject) => {
  const name = "lorem";

  if (name === "Claudio Cunha") {
    resolve("Accepted name!");
  } else {
    reject("User doesn't exists");
  }
});

myPromise3
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(`Error detected: ${err}`);
  });

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 ok! Timeout");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  resolve("P2 ok!");
});

const p3 = new Promise((resolve, reject) => {
  resolve("P3 ok!");
});

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
  console.log(data);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P4 ok!");
  }, 2000);
});

const p5 = new Promise((resolve, reject) => {
  resolve("P5 ok!");
});

const p6 = new Promise((resolve, reject) => {
  resolve("P6 ok!");
});

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
  console.log(data);
});
