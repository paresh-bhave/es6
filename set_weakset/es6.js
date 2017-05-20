"use strict";

/**
 * The Set object lets you store unique values of any type, whether primitive values or object references.
 * 
 * The WeakSet object lets you store weakly held objects in a collection.
 * 
 * More ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 *           https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
 */

/**
 * Set Example
 */

var TestSet = new Set();
var Obj = {
    prop1: 1,
    prop2: 2
}

TestSet.add("Hello").add(123).add(false).add(Obj);

console.log("No Duplicates:", TestSet); //Output: No Duplicates: Set { 'Hello', 123, false, { prop1: 1, prop2: 2 } }

TestSet.add("Hello").add(123);

console.log("Tried adding Duplicates:", TestSet); //Output: Tried adding Duplicates: Set { 'Hello', 123, false, { prop1: 1, prop2: 2 } }

/**
 * Not duplicate, reference Obj is different
 */
TestSet.add({
    prop1: 1,
    prop2: 2
});

/*
Output:
console.log("Tried adding object Duplicates:", TestSet);
Tried adding object Duplicates: Set {
  'Hello',
  123,
  false,
  { prop1: 1, prop2: 2 },
  { prop1: 1, prop2: 2 } }*/


/**
 * WeakSet
 * Can only add object types
 */
var TestWeakSet = new WeakSet();

var obj1 = { a: "A" };
var obj2 = { b: "B" };


TestWeakSet.add(obj1);

console.log("WeakSet:", TestWeakSet); //Please check this Chrome's debugger console.

//Following line should throw exception as invalid type is entered in WeakSet
//TestWeakSet.add(123);

/**
 * Other Supported Methods
 */

//Checking existince of a value in Set/WeakSet
console.log( TestSet.has(Obj) ); //Output: true
console.log( TestSet.has(123) ); //Output: true

//Removing from Set/WeakSet
TestSet.delete("Hello")
console.log( TestSet.has("Hello") );  //Output: false

//Cehcking size of Set/WeakSet
console.log( TestSet.size ); //Output: 4
