const a = 0; //false
const b = null; //false
const c = "teste"; //true

console.log(a || b || c);

const a2 = 0; //false and not null/undefined
const b2 = null; //false and null
const c2 = "teste2"; //true and not null/undefined

console.log(a ?? b ?? c);
