class Menu {
  constructor(){
    this.dishes = { "meatball sub": 5,
    "steak n cheese sub": 6,
    "low cal turkey sub": 4 };
  }

  viewMenu(){
    return this.dishes
  }
}

module.exports = Menu;