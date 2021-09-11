// explicit types --> 
var character; // initialize this variable and don't give any value, but in future only allow string in character variable.
var age;
var isLoggedIn;
age = 45;
isLoggedIn = false;
// arrays -->
var ninjas = [];
ninjas.push('john');
// union type -->
var mixed = [];
mixed.push('hello');
mixed.push(6);
mixed.push(false);
console.log(mixed);
var uid;
uid = '123';
uid = 123;
// objects -->
var ninjaOne;
ninjaOne = { name: 'tom', age: 19 };
ninjaOne = []; // as arrays are also objects
var ninjaTwo;
ninjaTwo = { name: 'mohan', age: 19, isLoggedIn: false };
