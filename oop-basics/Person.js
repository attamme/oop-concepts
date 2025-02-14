class Person {
    constructor(name) {
    this.name = name;
    }
    setDayOfBirth(year) {
    this.year = year;
    }
    getDayOfBirth() {
        return this.year;
    }
    age() {
        return 2025 - this.year;
    }
    getName() {
        return this.name;
    }
    description() {
        console.log(this.name + " is " + this.age() + " years old.");
    }
}

module.exports = Person;