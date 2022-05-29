const Menu = require("./menu");

class Order {
  constructor() {
    this.total = 0;
    this.basket = [];
    this.menu = new Menu();
  }

  pickDish(dish) {
    this.basket.push(dish);
  }
  
  viewBasket() {
    return this.basket;
  }
  
  
  //  one method to calculate total
  // getTotal() {
  //   this.menu.forEach
  // }

// one method to get total

}

module.exports = Order;