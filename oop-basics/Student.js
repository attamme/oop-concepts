const Person = require('./Person.js');

class Student extends Person {
    constructor(name) {
        super(name);
        this.id = null;
        this.grade = [];
    }
    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
    getGrade() {
        return this.grade;
    }
    getAverageGrade() {
        return this.grade.reduce((a, b) => a + b, 0) / this.grade.length;
    }
    description() {
        console.log(this.name + " has an average grade of " + this.getAverageGrade() + ".");
    }
}

module.exports = Student;