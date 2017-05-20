/**
 * Example 1
 * @param {*} name 
 */
function SayHi(name) {
    if(name === undefined) {
        name = "User";
    }
    console.log("Hello " + name);
}

SayHi("John");
SayHi();

/**
 * Example 2
 * @param {*} x 
 * @param {*} y 
 */
function F(x, y) {
    if(y === undefined) {
        y = 10;
    }
    return x + y;
}

console.log( F(10) === 20 );