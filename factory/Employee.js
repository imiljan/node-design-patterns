var Person = require('./Person');

class Employee extends Person {
  constructor(name, money = 0, employer) {
    super(name, money, true);
    this.employer = employer;
  }
  payDay(amount) {
    this.money += amount;
  }
}

module.exports = Employee;
