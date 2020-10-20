

class Person {
  #name;
  #age;
  id;

  constructor(name,age,id){
    this.#name = name;
    this.#age = age;
    this.id = id;
  }

  Getting(){
    console.log("Greetings!");
  }
  sayHi = () => console.log("Hello!",this.#name);
} 

var personOne = new Person("ashraf",24,1);
console.log(personOne);
var personTwo = new Person("hamzeh",21,2);
console.log(personTwo);

class Teacher extends Person{
  constructor(name,age,id){
    super(name,age,id);
  }

  sayHi = () => console.log("Good Morning!");

}

var sobhi = new Teacher();
sobhi.Getting();
sobhi.sayHi();

class Car{
 #id;
 #type;
 year;
 constructor(id,type,year){
   this.#id = id;
   this.#type = type;
   this.year = year;
 }
 Start(){
   console.log("The car is runing!",this.#carYears(this.year,2020));
   
 }
 #carYears(year , yearNow){
    return yearNow - year;
 }
} 



var carOne = new Car(1,"ford",2017);
var carTwo = new Car(2,"toyota",2015);

carOne.Start();

class Animal{
  #id;
  #name;
  #isPet=new Boolean();
  constructor(id,name,isPet){
    this.#id = id;
    this.#name = name;
    this.#isPet = isPet;
  }
  homeAnimal = () => {if(this.#isPet){return this}else{return flase}}
}


var animalOne = new Animal(1,"slark",false);
var animalTwo = new Animal(2,"Meow", true);
console.log(animalOne);
console.log(animalTwo);
animalTwo.homeAnimal();


prtintData = (printObj) => console.log(printObj);

prtintData(carOne);