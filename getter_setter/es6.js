"use strict";
/**
 * "use strict" context is must when using ES6 features.
 * get and set mthods are introduced with ES6 this allows you to validate or manipular private properties before setting or getting its value.
 * 
 */

/**
 * Declaring class Vehicle
 */
class Vehicle{
	constructor() {
		this._name = null;
		this._type = null;
	}
    /**
     * Setter
     */
    set name(name){
        /**
         * Validation can be placed here
         */
        if(name == "Pulsar")
            console.log("Pulsar is not in stock");
        this._name = name;
    }
    /**
     * Getter
     */
    get name() {
        return this._name;
    }
    /**
     * Setter
     */
    set type(type){
        this._type = type;
    }
    /**
     * Getter
     */
    get type() {
        return this._type.toUpperCase();
    }
}



/**
 * [creating object instance with new keyword]
 */
var v1 = new Vehicle();
var v2 = new Vehicle();

/**
 * Call to Setters
 */
v1.name = "Pulsar"; //Output: Pulsar is not in stock
v1.type = "Bike";

v2.name = "BMW";
v2.type = "Car";


/**
 * Call to getters
 */
console.log(v1.name); //Output: Pulsar
console.log(v2.type); //Output: CAR

/**
 * problem: You can still access the actual member variable in JS. 
 * solution: You can use typescript or babel as JS compiler which can throw exception before compiling;
 */
v1._name = "Yamaha";

console.log(v1.name); //Output: Yamaha
