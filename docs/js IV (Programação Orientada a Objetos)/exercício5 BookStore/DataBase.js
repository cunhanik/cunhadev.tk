module.exports = class DataBase {
  #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: [],
  };

  find(key) {
    return this.#storage[key];
  }

  saveAuthor(author) {
    this.#storage.authors.push(author);
  }

  findBookByName(bookName) {
    return this.#storage.books.find((b) => b.name === bookName);
  }

  saveBook(book) {
    const bookExists = this.findBookByName(book.name);
    if (!bookExists) {
      this.#storage.books.push(book);
    }
  }

  addBookToStock(bookName, quantity) {
    const bookToAdd = this.findBookByName(bookName);
    bookToAdd?.addToStock(quantity);
  }

  removeBookToStock(bookName, quantity) {
    const bookToRemove = this.findBookByName(bookName);
    bookToRemove?.removeFromStock(quantity);
  }

  findPosterByName(posterName) {
    return this.#storage.posters.find((p) => p.name === posterName);
  }

  savePoster(poster) {
    const posterExists = this.findPosterByName(poster.name);
    if (!posterExists) {
      this.#storage.posters.push(poster);
    }
  }

  addPosterToStock(posterName, quantity) {
    const posterToAdd = this.findPosterByName(posterName);
    posterToAdd?.addToStock(quantity);
  }

  removePosterToStock(posterName, quantity) {
    const posterToRemove = this.findPosterByName(posterName);
    posterToRemove?.removeFromStock(quantity);
  }

  saveUser(user) {
    const userExists = this.#storage.users.find((u) => u.email === user.email);
    if (!userExists) {
      this.#storage.users.push(user);
    }
  }

  saveOrder(order) {
    this.#storage.orders.push(order);
  }

  showStorage() {
    console.log("Authors: ");
    console.table(this.#storage.authors);
    console.log("Books: ");
    console.table(this.#storage.books);
    console.log("Posters: ");
    console.table(this.#storage.posters);
    console.log("Orders: ");
    console.table(this.#storage.orders.map((order) => order.data));
    console.log("Users: ");
    console.table(this.#storage.users);
  }
};
