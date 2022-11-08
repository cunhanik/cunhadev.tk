class Book {
  constructor(title) {
    this.title = title;
    this.published = false;
  }
  publish() {
    this.published = true;
  }
}

const livroX = new Book("X");
console.log(livroX);

const livroY = new Book("Y");
console.log(livroY);

livroY.publish();

console.log(livroX);
console.log(livroY);

console.log(livroX instanceof Book);
console.log([livroX, livroY] instanceof Array);
console.log(livroY instanceof String);
