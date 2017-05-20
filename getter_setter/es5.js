/**
 * In ES5, functions acts a class
 * 
 * [Vehicle function that acts as a class ]
 * @param {[string]} name [vehicle name]
 * @param {[string]} type [vehicle type]
 */
function Vehicle(){
    this._name = null;
    this._type = null;
}
/**
 * Setter
 */
Vehicle.prototype.setName = function(name){
    if (name == "Pulsar")
        console.log("Pulsar is not in stock");
    this._name = name;
}

Vehicle.prototype.getName = function(){
    return this._name;
}

Vehicle.prototype.setType = function(type){
    this._type = type;
}

Vehicle.prototype.getType = function(){
    return this._type.toUpperCase();
}



/**
 * [creating object instance with new keyword]
 */
var v1 = new Vehicle();
var v2 = new Vehicle();

/**
 * Call to Setters
 */
v1.setName("Pulsar");
v1.setType("Bike");

v2.setName("BMW");
v2.setType("Car");

/**
 * Call to getters
 */
console.log(v1.getName());
console.log(v2.getType());

/**
 * Glitch
 * You can still access the actual member variable;
 */
v1._name = "Yamaha";

console.log(v1.getName());




