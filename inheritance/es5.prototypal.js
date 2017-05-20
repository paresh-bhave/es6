/**
 * This is as example of prototypal inheritance.
 * In javascript Object.create allows you to inherti the properties from object directly.
 */

/**
 * Object Vehicle
 */
var Vehicle = {
    name: null,
    type: null,
    printDetails: function() {
        console.log("Vehicle Name: " + this.name + " | Vehicle type: " + this.type);
    }
}

/**
 * Create another object Car and inherit properties from Object Vehicle
 */
var Car = Object.create(Vehicle);
/**
 * Change property values
 */
Car.name = "BMW";
Car.type = "Car";


/**
 * Create another object Car and inherit properties from Object Vehicle
 */
var Bike = Object.create(Vehicle);
/**
 * Change property values
 */
Bike.name = "Pulsar";
Bike.type = "Bike";


/**
 * Create another object SportsBike and inherit properties from Object Vehicle
 */
var SportsBike = Object.create(Bike);
/**
 * Change property values
 */
SportsBike.name = "Hyosung";
SportsBike.type = "Sports Bike";


Car.printDetails();
Bike.printDetails();
SportsBike.printDetails();

console.log("----");

console.log("is Car instance of Vehicle: ", Car instanceof Vehicle);
console.log("is Bike instance of Vehicle: ", Bike instanceof Vehicle);
console.log("is SportsBike instance of Vehicle: ", SportsBike instanceof Vehicle);
console.log("is SportsBike instance of Bike: ", SportsBike instanceof Bike);

console.log("----");