const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

console.log(towns);
console.log(...towns);
console.log(...towns[0]);

const townsCopy = towns;

townsCopy.pop();
townsCopy.pop();
townsCopy.push("Porto");
console.log({ towns, townsCopy });

const townsClone = [...towns];
townsClone.push("Lisbon");

console.log({ towns, townsCopy, townsClone });

const townsObj = { ...towns };
const townsObjClone = { ...townsObj };
townsObjClone.test = "CloneCloneClone";

console.log({ townsObj, townsObjClone });
