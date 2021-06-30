"use strict";
// let greet: Function;
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
var result = calc(5, 7, 'no');
console.log(result);
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
var ninja = {
    name: 'Sean',
    age: 19
};
logDetails(ninja);
