/*const student={
    name:"mohit",
    rollno:24,
    phoneno:23203203,
};

const employee={
    calcTax(){
        console.log("tax rate is 10 %");
    },
};
const karanArjun={
    salary:5000,
    calcTax(){
        console.log("tax rate is 20 %");
    },
};

karanArjun.__proto__=employee;
*/
/*class ToyotoCar{
    ToyotoCar(brand,mil){
        this.brand=brand;
        this.mil=mil;
        console.log("mohit");
    }
     start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brand=brand;
    }

}
let fortuner=new ToyotoCar("swift",10);
fortuner.setBrand("mohit");
*/

/*class Person{
    constructor(){
        console.log("enter a parent constructor");
        this.species="home sapiens";
    }
    eat(){
        console.log("eat");
    }
}
class Engineer extends Person{
    
    constructor(branch){
       
        console.log("child constructor");
    super();
    this.branch=branch;
    console.log("exit chid constr");
    }

    work(){
        super.eat();
        console.log("solve problem");
    }
}

let engObj=new Engineer("chemical engg");*/

class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
}

class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal{
    
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal{
    
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);

rabbit.run();
fish.swim();
hawk.fly();