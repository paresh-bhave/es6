"use strict";
/**
 * Arrow :
 * Arrows are a function shorthand using the => syntax. 
 * They are syntactically similar to the related feature in C#, Java 8 and CoffeeScript. 
 * They support both statement block bodies as well as expression bodies which return the value of the expression. 
 * Unlike functions, arrows share the same lexical this as their surrounding code.
 * 
 * More Ref: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

/**
 * Example 1
 */

var users = [
    {
        id: 0,
        name: "John"
    },{
        id: 1,
        name: "Alba"
    },{
        id: 2,
        name: "Sarah"
    },{
        id: 3,
        name: "Bill"
    }
];

var list = {};

users.map( obj => list[obj.id] = obj.name );

console.log(list);
/**
 * Output:
 * { '0': 'John', '1': 'Alba', '2': 'Sarah', '3': 'Bill' }
 * 
 */


/**
 * Example 2
 */

var Sum = (x,y) => x + y;

console.log( Sum(5, 10) ); //Output: 15



/**
 * Example 3
 */

var findSqrs = [1,2,3,4,5,6,7,8,9];

console.log( findSqrs.map( n => n*n ) ); //Output: [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]


/**
 * Example 4
 */
var Employee = {
    name: "Bob",
    salary: [10000,20000,30000],
    printSalaryDetails: function(){
        var i = 0;
        this.salary.forEach( m => {
            console.log(this.name + "'s Month " + (++i) + " Salary is: " + m);
        })
    }
}

Employee.printSalaryDetails();
/**
 * Output:
 * 
 * Bob's Month 1 Salary is: 10000
 * Bob's Month 2 Salary is: 20000
 * Bob's Month 3 Salary is: 30000
 */