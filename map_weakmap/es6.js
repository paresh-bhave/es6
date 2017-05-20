"use strict";
/**
 * Efficient data structures for common algorithms. WeakMaps provides leak-free object-key’d side tables.
 * 
 * The Map object is a simple key/value map. Any value (both objects and primitive values) may be used as either a key or a value.
 * The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced.  The keys must be objects and the values can be arbitrary values.
 * 
 * More ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 *           https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
 * 
 */

/**
 * Map Example
 */
var TestMap = new Map();

var StringKey = "Hello",
    ObjectKey = { 
        prop: "I'm ObjectKey"
    },
    FunctionKey = function(){
        console.log("I'm gonna be a FunctionKey");
    };

/**
 * Set Values to the Map
 */
TestMap.set(StringKey, " John");
TestMap.set(ObjectKey, {
    prop: "I'm object value of ObjectKey"
});
TestMap.set(FunctionKey, function(){
    console.log("I'm function of FunctionKey");
});

/**
 * Getting Size of a Map
 */
console.log(TestMap.size); //output: 3

console.log( TestMap.get(StringKey) ); //output: John
console.log( TestMap.get(ObjectKey) ); //output: { prop: 'I\'m object value of ObjectKey' }
console.log( TestMap.get(FunctionKey) ); //output: [Function]

/**
 * Accessing Keys
 */

TestMap.forEach(function(value, key){
    console.log(key);
});
/**
 * output:
 * 
 * Hello
 * { prop: 'I\'m ObjectKey' }
 * [Function]
 */



/**
 * WeakMap Example
 * Similar to the WeakSet key can only be Objects
 */
var TestWeakMap = new WeakMap();

var ObjectKey1 = {},
    ObjectKey2 = {
        prop: "I'm object key"
    };

TestWeakMap.set(ObjectKey1, "Hello");
TestWeakMap.set(ObjectKey2, "Hello John");

/**
 * This will throw exception:
 * Uncomment following line to test.
 */
//TestWeakMap.set(StringKey, "Hello StringKey");


