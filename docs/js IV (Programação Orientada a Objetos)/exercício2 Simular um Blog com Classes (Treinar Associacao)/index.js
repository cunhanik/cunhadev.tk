const Author = require("./Author");

const cunha = new Author("Cunha");

const post = cunha.writePost("Titulo do post", "TextoTextoTextoTexto");

post.addComment("Bea", "Muito bom!");

post.addComment("Alice", "Muito mau!");

console.log(cunha);
console.log(post);