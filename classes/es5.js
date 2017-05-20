/**
 * In ES5, functions acts a class
 * 
 * [Vehicle function that acts as a class ]
 * @param {[string]} name [vehicle name]
 * @param {[string]} type [vehicle type]
 */
function Vehicle(name, type){
    this.name = name;
    this.type = type;
}

/**
 * [creating object instance with new keyword]
 */
var v1 = new Vehicle("Pulser","Bike");
var v2 = new Vehicle("Xuv", "Car");

console.log( "Vehicle 1:", v1.name, v1.type );
console.log( "Vehicle 2:", v2.name, v2.type );


