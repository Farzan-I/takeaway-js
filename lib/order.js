const Menu = require("./menu");

class Order {
  constructor(){
    this.total = 0;
    this.basket = [];
    this.menu = new Menu();
  }

//  one method to calculate total
  pickDish(dish){
    this.basket.push(dish);
  }

  viewBasket(){
    return this.basket;
  }

// one method to get total

}

module.exports = Order;