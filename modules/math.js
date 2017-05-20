"use strict";
/**
 * Example
 * Language-level support for modules for component definition. 
 * Codifies patterns from popular JavaScript module loaders (AMD, CommonJS). 
 * Runtime behaviour defined by a host-defined default loader. Implicitly async model – no code executes until requested modules are available and processed.
 * 
 * More ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 *           https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
 * 
 * Assumes an environment using CommonJS or Runtime environment
 */

export var Obj = {
    sum(x, y) {
        return x + y;
    },
    sub(x, y) {
        return x - y;
    },
    mul(x, y) {
        return x * y;
    },
    div(x, y) {
        return x / y;
    },
    rem(x, y){
        return x % y;
    }
}