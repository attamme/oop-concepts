// class Classname{
//     constructor(argumendid){
//         this.argumendid = argumendid;
//     }
// }

class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

// const object = new Classname(argumendid);
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

//output
console.log(myCar1.name, myCar1.year);
console.log(myCar2.name, myCar2.year);