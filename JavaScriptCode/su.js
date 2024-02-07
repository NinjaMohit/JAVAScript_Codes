class Animal{

    constructor(name, age){
        console.log("In Animal");
        this.name = name;
        this.age = age;
    }
}
class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        console.log("In Rabbit");
        super(name, age);
        this.runSpeed = runSpeed;
    }
}
const rabbit = new Rabbit("rabbit", 1, 25);
