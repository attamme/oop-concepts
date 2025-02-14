class Student {
  constructor(name, finished){
        this.name = name;
        this.finished = finished;
  }
}

const student = new Student("John", false);
console.log(student.name); // John
console.log(student.finished); // false