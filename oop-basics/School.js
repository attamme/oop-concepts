const Student = require('./Student.js');
const Course = require('./Course.js');
const Person = require('./Person.js');

class School {
    constructor(school) {
    super(name);
    super(course);
    this.school = school;
    }
    addCourse(course) {
    this.course.push(course);
    }
    addStudent(student) {
    this.student.push(student);
    }
    addStudentGrade(student, course, grade) {
    this.student.grade.push(grade);
    }
    getStudents() {
    return this.student;
    }
    getCourses() {
        return this.course;
    }
    getStudentsOrderedByAverageGrade() {
        return this.student.sort((a, b) => a.getAverageGrade() - b.getAverageGrade());
    }
}

module.exports = School;