module.exports = class Order {
  #items;
  #user;
  #total;
  //items = [quantity, product]
  //total = product * quantity

  constructor(user, items) {
    items.forEach(({ product, quantity }) => {
      if (quantity > product.inStock) {
        throw new Error(`Quantidade insuficiente em Stock!`);
      }
    });
    this.#user = user;
    this.#items = items;
    this.#total = items.reduce(
      (sum, { product, quantity }) => sum + product.price * quantity,
      0
    );
  }

  get data() {
    return {
      items: this.#items,
      user: this.#user,
      total: this.#total,
    };
  }
};
