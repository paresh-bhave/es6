
/**
 * "use strict" context is must when using ES6 features.
 * Static methods can only accessed called with Class name.
 * 
 */

"use strict";

class Vehicle{
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}

    /**
     * member function
     */
    printDetails(){
        console.log(this.name, this.type);
    }

    /**
     * Static function run
     */
    static run(){
        console.log("Vehicle is running...");
    }
    /**
     * Static function stop
     */
    static stop(){
        console.log("Vehicle has stopped!");
    }
}

var v1 = new Vehicle("Pulser","Bike"); 
var v2 = new Vehicle("Xuv", "Car");

v1.printDetails(); //Output: Pulser Bike
v2.printDetails(); //Output: Xuv Car

Vehicle.run(); //Output: Vehicle is running...
Vehicle.stop(); //Output: Vehicle has stopped!

//v1.run()

/**
 * Uncomment above line to check.
 * This statement is more likely to throw the error saying v1.run is not a function
 */