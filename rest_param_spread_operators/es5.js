
/**
 * Example 1
 */
function numSet() {
    console.log(arguments);
}

numSet(0);
numSet(0,1);
numSet(0,2,1,2);

/**
 * Example 2
 */
function charSet() {
    var a = arguments[0],
        b = arguments[1];

    var rest = [];
    for(var i = 2; i < arguments.length; i++) {
        rest.push( arguments[i] );
    }

    console.log(a, b, rest);
}

charSet("a");
charSet("a","b");
charSet("a","b","c","d");

/**
 * Example 3
 */
var nums = [0,2,4,6,7,8,9];
function sumOfFirstThreeNums(arr) {
  return arr[0] + arr[1] + arr[2];
}

console.log( sumOfFirstThreeNums(nums) );