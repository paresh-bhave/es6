// Using forEach()
// Doesn't require declaring indexing and element variables in your containing
// scope. They get supplied as arguments to the iterator and are scoped to just
// that iteration.

/**
 * Example 1
 */
var a = [1,2,3];
a.forEach(function (element) {
    console.log(element);
});

// => 1 2 3

// Using a for loop
var a = [1,2,3];
for (var i = 0; i < a.length; ++i) {
    console.log(a[i]);
}
// => 1 2 3