/*
-JavaScript classes were introduced in ES5, as a new way to write JS's previous prototype-based inheritence, which is a way of creating an object that acts as a blueprint.
​
-Classes act as a blueprint for creating objects that share methods and properties.
​
-Classes consist of the class name, curly braces, and any properties or methods we include within the curly braces.
​
-Classes can be written as class expressions or class declarations
​
-Class declarations do not get hoisted
​
class Automobile {
    //methods and properties go here
}
​
let vehicle = class {
    //method and properties go here
}
​
-The constructor method is a special method that helps create and initialize an object created from a class. It works in tandem with the new keyword.
​
-The constructor needs to be included for us to create new objects or instances of our class. This allows us to set up properties as well as pass in values for those properties when creating the new instance.
​
-Each class can only have ONE constructor
​
        (1)
class Cookie {
                        (2)
    constructor(type, icing, shape){
          (3)     (4)
        this.t = type;
        this.i = icing;
        this.s = shape;
    }
}
​
1-We have a class named Cookie
2-The constructor method takes in three parameters of type, icing, and shape. Since the constructor method is invoked when we call upon the class, we need to supply the arguments.
3-We are assigning keys/properties for each new instance of our Cookie class
4-We are assigning those keys/properties the values that we pass in as arugments
*/
​
class Cookie {
  constructor(type, icing, shape) {
    this.t = type;
    this.i = icing;
    this.s = shape;
  }
}
​
let chocolateChip = new Cookie("chocolate chip", false, "circle");
console.log(chocolateChip);
​
class AutomobileTwo {
    start() {
        console.log("Hello");
    }
​
    stop() {
        console.log("Bye");
    }
}
​
let newCar = new AutomobileTwo();
console.log(newCar);
newCar.start();
/*
Bronze:
Build an Automobile class that takes in a make and a model in the constructor. Bind those two parameters to the class's properties with matching names. 
​
Silver:
Add two methods to the Automobile class: start() and stop(). Each method should print out a message to the console that the engine has started or stopped. Include the vehicle's make and model in the output.
​
Gold:
Use the new keyword to create a new instance of the Automobile class and assign the new instance to a variable. Run both methods.
*/
​
class Automobile {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
​
    start() {
        console.log(`The ${this.make} ${this.model}'s engine started`);
    }
​
    stop() {
        console.log(`The ${this.make} ${this.model}'s engine stopped`);
    }
}
​
let hondaCivic = new Automobile("Honda", "Civic");
console.log(hondaCivic);
hondaCivic.start();
hondaCivic.stop();
​
let fordEscape = new Automobile("Ford", "Escape");
console.log(fordEscape);
fordEscape.start();
fordEscape.stop();
​
/*
-The extends keyword is used in class delcarations/expressions to create a new class as a child of another class.
​
-Each new class we create that extends from the parent class not only inherits the proprties and methods from the parent class, but it also can have it's own methods and properties
*/
​
//Parent
class Animal {
    constructor(name){
        this.name = name;
    }
​
    eat(){
        console.log(`${this.name} eats their food`);
    }
}
​
//Subclass
//The super method gives us access to the parent classes properties and methods
class Dog extends Animal {
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
​
    play() {
        console.log(`${this.name} fetches the ball!`);
    }
}
​
let Georgie = new Dog("Georgie", "Bearded Collie");
console.log(Georgie instanceof Animal);
Georgie.eat();
Georgie.play();
​