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

const roi = 7.5;
export function principle(p, ia, m) {
    return p * ( ia + ( m * roi ) );
}