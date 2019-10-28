var Person = require('./Person');

class Shopper extends Person {
  constructor(name, money) {
    super(name, money);
    this.employed = false;
  }
}

module.exports = Shopper;
