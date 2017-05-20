/**
 * Example 1
 * Shorthand Object Assignment
 */

var x = 0;
var y = 0;

var obj = { 
    x: x,
    y: y
};

console.log(obj);

/**
 * Example 2
 * Shorthand Property method Assignment
 */

var newObj = {
    getPos: function (){
        console.log("X:" + obj.x + " | Y:" + obj.y)
    }
}

newObj.getPos();



/**
 * Example 3
 * Dynamic Property Assignment
 */
var dynamicObj = {};

for (var index = 0; index < 10; index++) {
    var propName = 'PROP' + index;
    dynamicObj[propName] = index;
}

console.log(dynamicObj);