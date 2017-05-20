/**
 * Example 1
 */

var users = [
    {
        id: 0,
        name: "John"
    },{
        id: 1,
        name: "Alba"
    },{
        id: 2,
        name: "Sarah"
    },{
        id: 3,
        name: "Bill"
    }
];

var list = {};

users.map(function(obj){
    list[obj.id] = obj.name;
})

console.log(list);



/**
 * Example 2
 */
function Sum(x, y) {
    return x + y;
}

console.log( Sum(5, 10) );


/**
 * Example 3
 */

var findSqrs = [1,2,3,4,5,6,7,8,9];

var sqrs = findSqrs.map(function(n) {
    return n * n;
});

console.log( sqrs );



/**
 * Example 4
 */

var Employee = {
    name: "Bob",
    salary: [10000,20000,30000],
    printSalaryDetails: function(){
        var i = 0;
        var self = this;
        this.salary.forEach(function(m){
            console.log(self.name + "'s Month " + (++i) + " Salary is: " + m);
        });
    }
}

Employee.printSalaryDetails();