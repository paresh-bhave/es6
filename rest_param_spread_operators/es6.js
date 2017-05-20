"use strict";

/**
 * Rest parameters allows your functions to have variable number of arguments without using the arguments object. 
 * The rest parameter is an instance of Array so all the array methods just work.
 * 
 * The spread operator is like the reverse of rest parameters. It allows you to expand an array into multiple formal parameters.
 * 
 * More ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
 *           https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
 */

/**
 * rest operator
 * Example 1
 */
function numSet(...params) {
    console.log(params);
}

numSet(0);
numSet(0,1);
numSet(0,2,1,2);

/**
 * Example 2
 */
function charSet(a,b,...rest) {
    console.log(a, b, rest);
}

charSet("a");
charSet("a","b");
charSet("a","b","c","d");


/**
 * Spread
 * Example 3
 */
var nums = [0,2,4,6,7,8,9];
function sumOfFirstThreeNums(x, y, z) {
  return x + y + z;
}

console.log( sumOfFirstThreeNums(...nums) );