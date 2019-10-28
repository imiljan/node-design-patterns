class Person {
  constructor(name, money = 0, employed = false) {
    this.name = name;
    this.money = money;
    this.employed = employed;
  }

  toString() {
    return JSON.stringify(this);
  }
}

module.exports = Person;
