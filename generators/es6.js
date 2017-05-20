"use strict";
/**
 * Generators simplify iterator-authoring using function* and yield. 
 * A function declared as function* returns a Generator instance. 
 * Generators are subtypes of iterators which include additional next and throw. 
 * These enable values to flow back into the generator, so yield is an expression form which returns a value (or throws).
 * 
 * Note: Can also be used to enable ‘await’-like async programming, see also ES7 await proposal.
 * 
 * More ref: https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Iterators_and_Generators
 */

function* idMaker() {
  var index = 0;
  while(true)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); //Output: 0
console.log(gen.next().value); //Output: 1
console.log(gen.next().value); //Output: 2