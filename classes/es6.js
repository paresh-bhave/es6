
/**
 * "use strict" context is must when using ES6 features.
 * ES6 classes are a simple sugar over the prototype-based OO pattern. 
 * Having a single convenient declarative form makes class patterns easier to use, and encourages interoperability. 
 * Classes support prototype-based inheritance, super calls, instance and static methods and constructors.
 * 
 * More ref: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes
 */

"use strict";

/**
 * Declaring class Vehicle
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
}



/**
 * [creating object instance with new keyword]
 */
var v1 = new Vehicle("Pulser","Bike");
var v2 = new Vehicle("Xuv", "Car");

console.log( "Vehicle 1:", v1.name, v1.type ); //Output: Vehicle 1: Pulser Bike
console.log( "Vehicle 2:", v2.name, v2.type ); //Output: Vehicle 2: Xuv Car