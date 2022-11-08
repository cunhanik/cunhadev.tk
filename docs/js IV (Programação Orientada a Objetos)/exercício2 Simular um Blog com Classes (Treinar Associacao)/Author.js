const Post = require("./Post");

class Author {
  constructor(author) {
    this.author = author;
    this.posts = [];
  }

  writePost(title, body) {
    const post = new Post(title, body, this);
    //O nosso new Post, precisa de 3 parâmetros: title, body e author;
    //Mas não precisamos de passar o author como parâmetro no método "writePost" porque nós já estámos a criar um autor
    //Com o "this" conseguimos enviar para a outra class (o construtor) o objeto inteiro do nosso autor!
    this.posts.push(post);
    return post;
  }
}

module.exports = Author;
