"use strict";
/**
 * Object literals are extended to support setting the prototype at construction, shorthand for foo: foo assignments, 
 * defining methods, making super calls, and computing property names with expressions. 
 * Together, these also bring object literals and class declarations closer together, and let object-based design benefit from some of the same conveniences.
 * 
 * More ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals
 */

/**
 * Example 1
 * Shorthand Object Assignment
 */

var x = 0;
var y = 0;

var obj = { x, y };

console.log(obj); //Output: { x: 0, y: 0 }

/**
 * Example 2
 * Shorthand Property method Assignment
 */

var newObj = {
    getPos(){
        console.log("X:" + obj.x + " | Y:" + obj.y)
    }
}

newObj.getPos();  //Output: X:0 | Y:0



/**
 * Example 3
 * Dynamic Property Assignment
 */

var x = 0;
var getPropName = () => ++x; //check arrow function if you haven't read yet

var dynamicObj = {
    [ 'prop_' + getPropName() ]: 1,
    [ 'prop_' + getPropName() ]: 2,
    [ 'prop_' + getPropName() ]: 3,
    [ 'prop_' + getPropName() ]: 4,
    [ 'prop_' + getPropName() ]: 5
};

console.log(dynamicObj); //Output: { prop_1: 1, prop_2: 2, prop_3: 3, prop_4: 4, prop_5: 5 }