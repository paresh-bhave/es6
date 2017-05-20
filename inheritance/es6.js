/**
 * "use strict" context is must when using ES6 features.
 * 
 *  Javascript ES6 allows following types of Inheritance
 *  Single, Hirarchical, Multilevel (References to root only)
 */

"use strict";

/**
 * declaring class vehcile
 */
class Vehicle{
	/**
	 * [constructor method is invoked when new object instance is created]
	 * @param {[string]} name [vehicle name]
	 * @param {[string]} type [vehicle type]
	 */
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}

	/**
	 * [printDetails class method to print details]
	 */
	printDetails(){
		console.log("Vehicle Name: " + this.name + " | Vehicle type: " + this.type);
	}
}

/**
 * Class car extends vehicle
 */
class Car extends Vehicle {
	/**
	 * Super method to invoke Parent class's constructor
	 * and inherit properties to Car
	 */
	constructor(name) {
		super(name, "Car");
	}
}

/**
 * Another class Bike extends Vehicle
 */
class Bike extends Vehicle {
	constructor(name, type) {
		/**
		 * Super method to invoke Parent class's constructor
		 * and inherit properties to Bike
		 */
		super(name, (type || "Bike") );
	}
}

/**
 * Another class achievieng Multilevel inheritance
 */
class SportsBike extends Bike {
	constructor(name) {
		super(name, "Sports Bike");
	}
}

/**
 * [creating object instance with new keyword]
 */
let v1 = new Bike("Pulser");
let v2 = new Car("BMD");
let v3 = new SportsBike("Hayabusa");

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