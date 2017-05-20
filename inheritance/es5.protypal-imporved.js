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
    create: function(props){
        var instance = Object.create(this);
        Object.keys(props).forEach(function(key) {
            instance[key] = props[key];
        })
        return instance;
    },
    printDetails: function() {
        console.log("Vehicle Name: " + this.name + " | Vehicle type: " + this.type);
    }
}

/**
 * Extend Object
 */
var v1 = Vehicle.create({
    name: "BMW",
    type: "Car"
});

v1.printDetails();


/**
 * ES6 with Enhanced Literals
 */
/*
var Vehicle = {
    name: null,
    type: null,
    create(props){
        var instance = Object.create(this);
        Object.keys(props).forEach(function(key) {
            instance[key] = props[key];
        })
        return instance;
    },
    printDetails() {
        console.log("Vehicle Name: " + this.name + " | Vehicle type: " + this.type);
    }
}*/