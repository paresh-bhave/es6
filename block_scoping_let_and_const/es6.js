"use strict";

/**
 * Block scoped bindings provide scopes other than the function and top level scope. 
 * This ensures your variables don't leak out of the scope they're defined.
 * ES6 lets you create blocks with just {}; 
 * let is the new var. const is single-assignment. Static restrictions prevent use before assignment.
 * 
 * More Ref:
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 */

"use strict";

function f() { 
  var a = 10;
  const PI = 3.14;
  { //inner block A

    console.log("a is 10 here", a); //Output: a is 10 here 10

    let x; 
    { //inner block B
      a = 20;

      console.log("a is 20 here", a);  //Output: a is 20 here 20

      // okay, block scoped name. 
      const x = "sneaky";
      
      
      // error, const is already declared cannot assign. Uncomment following line to check
      // x = "foo";
      
      const PI = 3.145;
    
    } //inner block B

    // error, x 'let' is already declared in block. Uncomment following line to check
    // let x = "inner";

  }  //inner block A

  //error, PI is declared in this block. Uncomment following line to check
  // const PI = 3.145;

} //f block

f();