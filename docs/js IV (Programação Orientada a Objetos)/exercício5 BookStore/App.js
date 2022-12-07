const DataBase = require("./DataBase");
const Author = require("./entities/Author");
const Book = require("./entities/Book");
const Order = require("./entities/Order");
const Poster = require("./entities/Poster");
const User = require("./entities/User");

module.exports = class App {
  static #dataBase = new DataBase();

  createUser(nome, email, password) {
    const user = new User(nome, email, password);
    App.#dataBase.saveUser(user);
  }

  getUsers() {
    return App.#dataBase.find("users");
  }

  createAuthor(name, nacionality, bio) {
    const author = new Author(name, nacionality, bio);
    App.#dataBase.saveAuthor(author);
  }

  getAuthors() {
    return App.#dataBase.find("authors");
  }

  createBook(
    title,
    synopsis,
    genre,
    pages,
    author,
    description,
    price,
    inStock
  ) {
    const book = new Book(
      title,
      synopsis,
      genre,
      pages,
      author,
      description,
      price,
      inStock
    );

    App.#dataBase.saveBook(book);
  }

  addBook(bookTitle, quantity) {
    App.#dataBase.addBookToStock(bookTitle, quantity);
  }

  getBooks() {
    return App.#dataBase.find("books");
  }

  createPoster(name, description, height, width, price, inStock) {
    const poster = new Poster(name, description, height, width, price, inStock);
    App.#dataBase.savePoster(poster);
  }

  addPoster(posterName, quantity) {
    App.#dataBase.addPosterToStock(posterName, quantity);
  }

  getPosters() {
    return App.#dataBase.find("posters");
  }

  createOrder(user, items) {
    const order = new Order(user, items);
    App.#dataBase.saveOrder(order);
    order.data.items.forEach(({ product, quantity }) => {
      if (product instanceof Book) {
        App.#dataBase.removeBookToStock(product.name, quantity);
      } else if (product instanceof Poster) {
        App.#dataBase.removePosterToStock(product.name, quantity);
      }
    });
  }
  getOrders() {
    App.#dataBase.find("orders");
  }

  showDataBase() {
    App.#dataBase.showStorage();
  }
};
