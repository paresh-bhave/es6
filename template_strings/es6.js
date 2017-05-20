"use strict";
/**
 * Template strings provide syntactic sugar for constructing strings. 
 * This is similar to string interpolation features in Perl, Python and more. 
 * Optionally, a tag can be added to allow the string construction to be customized, avoiding injection attacks or constructing higher level data structures from string contents.
 * 
 * More ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */

/**
 * Example 1
 * Basic literal string creation
 */
console.log( `This is \n line-feed` );



/**
 * Example 2
 * Multiline literal
 */
var multilineString = `\n Now JavaScript can 
have multiline string  
you don't concatination or escape characters`;

console.log( multilineString );



/**
 * String interpolation
 */
var first = "James", last = "Bond";
console.log(`\n My name is ${last}, ${first} ${last}`);