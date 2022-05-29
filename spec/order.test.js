const Order = require('../lib/order');

describe('Order', () => {
  it('adds a dish to the basket', () => {
    var order = new Order();
    order.pickDish("meatball sub");
    expect(order.viewBasket()).toEqual(["meatball sub"]);
  })

  it('calculates total sum of the order', () => {
    var order = new Order();
    order.pickDish("meatball sub");
    expect(order.getTotal()).toEqual("Your basket's total is £5.");
  })

})

