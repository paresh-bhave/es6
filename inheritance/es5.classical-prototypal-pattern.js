/**
 * Another way of inheriting parent only keeping methods under prototype property
 * by this approach no matter how many object instances are created reference to the 'printDetails()'
 * method remains the same
 * 
 * [Vehicle function constructor that acts as a class ]
 * @param {[string]} name [vehicle name]
 * @param {[string]} type [vehicle type]
 */
function Vehicle(name, type){
    this.name = name;
    this.type = type;
}


/**
 * [printDetails  class method to print details]
 */
Vehicle.prototype.printDetails = function(){
	console.log("Vehicle Name: " + this.name + " | Vehicle type: " + this.type);
}


/**
 * [Bike description]
 * @param {[string]} name [Bike name]
 * @param {[type]} type [Bike description]
 */
function Bike(name, type){
	/**
	 * Invoking parent class and assigning it's members to the class 'Bike' using 'this'
	 */
	Vehicle.call(this, name, type || "Bike");
}
/**
 * [inheriting prototypal properties from parent class]
 */
Bike.prototype = Object.create(Vehicle.prototype);


/**
 * [Car description]
 * @param {[string]} name [car name]
 */
function Car(name){
	Vehicle.call(this, name, "Car");
}
/**
 * [inheriting prototypal properties from parent class]
 */
Car.prototype = Object.create(Vehicle.prototype);


/**
 * [SportsBike description]
 * @param {[string]} name [sportsbike name]
 */
function SportsBike(name){
	Bike.call(this, name, "Sports Bike");
}
/**
 * [inheriting prototypal properties from parent class]
 */
SportsBike.prototype = Object.create(Bike.prototype);


/**
 * [creating object instance with new keyword]
 */
var v1 = new Bike("Pulser");
var v2 = new Car("BMD");
var v3 = new SportsBike("Hayabusa");

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