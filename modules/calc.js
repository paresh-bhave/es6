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

import GenCals from "math";
import LoanCalc from "interest";

var [x,y] = [10,20];

console.log( GenCals.sum(x,y) );