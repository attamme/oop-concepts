const School = require('./School.js');

class Course extends School {
    constructor(course) {
    super(course);
    }
    getGrades() {
        return this.grade;
    }
    getAverageGrade() {
        return this.grade.reduce((a, b) => a + b, 0) / this.grade.length;
    }
    description() {
        console.log(this.course + " has an average grade of " + this.getAverageGrade() + ".");
    }
}

module.exports = Course;