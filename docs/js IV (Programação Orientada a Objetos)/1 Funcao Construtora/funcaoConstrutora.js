function Book(title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  this.inStock = 0;
  this.addOnStock = function (quantity) {
    this.inStock += quantity;
  };
  this.save = function () {
    /*Guardar-Dados*/
  };
}

const tags = ["fantasy", "adventure"];
const author = { name: "Christopher Peolini" };
const eragon = new Book("Eragon", 468, tags, author);

console.log(eragon);

const eldest = new Book("Eldest", 644, tags, author);

console.log(eldest);
