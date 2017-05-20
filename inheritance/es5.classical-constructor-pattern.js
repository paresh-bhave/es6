/**
 * This is a classical approach for inheritance in JavaScript with ES5 standards.
 * In this approach, every time new object instances are created, 
 * new references to the member functions are created which can lead to memory issues.
 * 
 * [Vehicle function constructor that acts as a class ]
 * @param {[string]} name [vehicle name]
 * @param {[string]} type [vehicle type]
 */
function Vehicle(name, type){
    this.name = name;
    this.type = type;
    
    /**
     * [printDetails  class method to print details]
     */
    this.printDetails = function(){
    	console.log("Vehicle Name: " + this.name + " | Vehicle type: " + this.type);
    }
}

/**
 * [Bike description]
 * @param {[string]} name [bike name]
 * @param {[string]} type [bike type]
 */
function Bike(name, type){
	/**
	 * Invoking parent class and assigning member to class Bike using 'this'
	 */
	Vehicle.call(this, name, type || "Bike");
}

/**
 * [Car description]
 * @param {[string]} name [car name]
 */
function Car(name){
    /**
     * Invoking parent class and assigning member to class Car using 'this'
     */
	Vehicle.call(this, name, "Car");
}

/**
 * [SportsBike description]
 * @param {[string]} name [car name]
 */
function SportsBike(name){
    /**
     * Invoking parent class and assigning member to class SportsBike using 'this'
     */
	Bike.call(this, name, "Sports Bike");
}

/**
 * [creating object instance with new keyword]
 */
var v1 = new Bike("Pulser");
var v2 = new Car("BMD");
var v3 = new SportsBike("Hayabusa");

console.log("----");

v1.printDetails();
v2.printDetails();
v3.printDetails();

console.log("----");

console.log("is v1 instance of Bike: ", v1 instanceof Bike);
console.log("is v2 instance of Bike: ", v2 instanceof Bike);
console.log("is v3 instance of Bike: ", v3 instanceof Bike);

console.log("----");

console.log("is v1 instance of Car: ", v1 instanceof Car);
console.log("is v2 instance of Car: ", v2 instanceof Car);
console.log("is v3 instance of Car: ", v3 instanceof Car);

console.log("----");

console.log("is v1 instance of SportsBike: ", v1 instanceof SportsBike);
console.log("is v2 instance of SportsBike: ", v2 instanceof SportsBike);
console.log("is v3 instance of SportsBike: ", v3 instanceof SportsBike);

console.log("----");

console.log("is v1 instance of Vehicle: ", v1 instanceof Vehicle);
console.log("is v2 instance of Vehicle: ", v2 instanceof Vehicle);
console.log("is v3 instance of Vehicle: ", v3 instanceof Vehicle);