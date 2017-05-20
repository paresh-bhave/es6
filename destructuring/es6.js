
/**
 * In ES6, Destructuring allows binding using pattern matching, with support for matching arrays and objects. 
 * Destructuring is fail-soft, similar to standard object lookup foo["bar"], producing undefined values when not found.
 * 
 * More Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * 
 * Note: This feature might not work in node v4.4.4 console. Try in Chrome Debugger Tool.
 */

/**
 * Example 1
 */

var chars = [10,20,30,40,"A","B","C"];

var [num1, num2, num3, num4] = chars;

console.log(num1); //Output: 10
console.log(num2); //Output: 20
console.log(num3); //Output: 30
console.log(num4); //Output: 40


/**
 * Example 2
 */

var [,,,, char1, char2, char3] = chars;

console.log(char1); //Output: A
console.log(char2); //Output: B
console.log(char3); //Output: C

/**
 * Example 3
 */
var {name, lastName} = { name: "John", lastName: "Rambo"};

console.log(name); //Output: John
console.log(lastName); //Output: Rambo