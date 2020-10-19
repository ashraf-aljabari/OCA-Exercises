class Person {
  constructor(name,age,location){
    this.name = name;
    this.age =  age;
  }
  // saysHi(){
  //   return `Hello my name is ${this.name} I am ${this.age} years old.`;
  // }
  getInfo = () => console.log(`Hello my name is ${this.name} I am ${this.age} years old, i live in ${this.location}.`)
  getInfo = (name) => console.log(`Hello my name is ${name}.`)
}

class Child extends Person {
  constructor(name,age,school){
   super(name,age);
    this.age = age;
    this.name = name;
    this.school = school;
  }
  getInfo = ()=> console.log(`Hello my name is ${this.name}, i am ${this.age} years old , i study in ${this.school}`)
}

class Car {
  constructor (type,year){
    this.type = type;
    this.year = year
  }
  // CarSpec(){
  //   return `this is a ${this.type} car, It was manufacturer in ${this.year}.`;
  // }
  carSpec =() => console.log(`this is a ${this.type} car, It was manufacturer in ${this.year}.`)
  }


class Animal {

  constructor(name,age,type){    
    this.name = name;
    this.type = type;
    this.age = age;
  }

  // petInfo(){
  //   return `this is ${this.name}, he's ${this.age} years old, hes a ${this.type}.`;
  // }

  petInfo = () => console.log(`this is ${this.name}, he's ${this.age} years old, hes a ${this.type}.`)
 }

let personOne = new Person("ashraf",24);
let personTwo = new Person("mark",100);
console.log(personOne);
personTwo.getInfo("ashraf");

let childOne = new Child("fat7i", 10, "OCA");
childOne.getInfo();

let carOne = new Car("toyota",2012);
let carTwo = new Car("ford",2020);
console.log(carTwo);
carOne.carSpec();

let animalOne = new Animal("oreo", 2,"cat");
let animalTwo = new Animal("slark",4,"dog");

console.log(animalOne);
animalTwo.petInfo();

