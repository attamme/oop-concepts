class Person {
  constructor() {
    this.firstname = "";
    this.lastname = "";
    this.age = 0;
  }
}

const person1 = new Person();
person1.firstname = "Uuta";
person1.lastname = "Keegel";
person1.age = 21;
console.log(person1.firstname, person1.lastname, person1.age);

const person2 = new Person();
person2.firstname = "Mari";
person2.lastname = "Kuusk";
person2.age = 48;
console.log(person2.firstname, person2.lastname, person2.age);

const person3 = new Person();
person3.firstname = "Jaan";
person3.lastname = "Kask";
person3.age = 17;
console.log(person3.firstname, person3.lastname, person3.age);

class Student {
    constructor(firstname, lastname, age) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.age = age;
    }
  }
  
const student1 = new Student("Jane", "Don", 40);
console.log(student1.firstname, student1.lastname, student1.age);

const student2 = new Student("Jack", "Dol", 30);
console.log(student2.firstname, student2.lastname, student2.age);

const student3 = new Student("John", "Doe", 50);
console.log(student3.firstname, student3.lastname, student3.age);