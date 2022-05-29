const Menu = require('../lib/menu')

describe('Menu' , () => {
  describe('viewDishes', () => {
    it('contains a list of the dishes with prices', () => {
      var menu = new Menu()
      expect(menu.viewMenu()).toEqual({ "meatball sub": 5,
      "steak n cheese sub": 6,
      "low cal turkey sub": 4 }) 
    })
  })


})