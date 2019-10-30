var Shopper = require('./Shopper');

class Employee extends Shopper {
  constructor(name, money = 0, employer) {
    super(name, money, true);
    this.employer = employer;
  }
  payDay(amount) {
    this.money += amount;
  }
}

module.exports = Employee;
