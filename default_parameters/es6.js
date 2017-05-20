"use strict";
/**
 * ES6 allows you to set default parameter value.
 * Default parameters allow your functions to have optional arguments without needing to check arguments.length or check for undefined.
 * 
 * More ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
 * Note: This feature might not work in node v4.4.4 console. Try in Chrome Debugger Tool
 */


/**
 * Example 1
 */
function SayHi(user='user') {
    console.log("Hello " + user);
}
SayHi("John"); //Output: Hello John
SayHi(); //Output: Hello John


/**
 * Example 2
 * @param {*} x 
 * @param {*} y 
 */
function func(x, y=10) {
    return x + y;
}

console.log( func(10) === 20 ); //Output: true