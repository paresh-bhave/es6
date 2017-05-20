/**
 * [Vehicle function that acts as a class ]
 * @param {[string]} name [vehicle name]
 * @param {[string]} type [vehicle type]
 */
function Vehicle(name, type){
    this.name = name;
    this.type = type;
}

/**
 * prototype property function printDetails 
 * which can be accessed by Vehicle's any object instance
 */
Vehicle.prototype.printDetails = function(){
    console.log(this.name, this.type);
}

/**
 * Static function run and stop. Moreof direct property functions of Vehicle object.
 * Not accessible by its object instance
 */
Vehicle.run = function(){
    console.log("Vehicle is running...");
}
Vehicle.stop = function(){
    console.log("Vehicle has stopped!");
}


var v1 = new Vehicle("Pulser","Bike");
var v2 = new Vehicle("Xuv", "Car");

v1.printDetails();
v2.printDetails();

Vehicle.run();
Vehicle.stop();

//v1.run()

/**
 * Uncomment above line to check.
 * This statement is more likely to throw the error saying v1.run is not a function
 */
