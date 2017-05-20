"use strict";

/**
 * 
 * Iterators are objects that can traverse a container. 
 * It's a useful way to make a class work inside a for of loop. 
 * The interface is similar to the iterators-interface. Iterating with a for..of loop looks like:
 * Iterator objects enable custom iteration like CLR IEnumerable or Java Iterable. 
 * Generalize for..in to custom iterator-based iteration with for..of. Don’t require realizing an array, enabling lazy design patterns like LINQ.
 * 
 * More ref: https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Iterators_and_Generators 
 *           https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */

/**
 * Example 1
 */

// Behind the scenes, this will get an iterator from the array and loop through it, getting values from it.
for (let element of [1, 2, 3]) {
    console.log(element);
}
//Output: 1 2 3

/**
 * Example 2
 */
function makeIterator(array) {
    var nextIndex = 0;
    
    return {
       next: function() {
           return nextIndex < array.length ? { value: array[nextIndex++], done: false } : { done: true };
       }
    };
}

var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); //Output: 'yo'
console.log(it.next().value); //Output: 'ya'
console.log(it.next().done);  //Output: true
