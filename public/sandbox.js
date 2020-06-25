"use strict";
// let greet: Function = () => {
//   console.log('hello, world');
// }
// greet = 'hello';
// greet = () => {
//   console.log('hello, again');
// }
var add = function (a, b, c) {
    if (c === void 0) { c = 50; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, "난 세 번째 인자");
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
//console.log(result);
