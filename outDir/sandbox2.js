"use strict";
// 型指定をanyにすると普通の変数みたくTSでも型が変動する
let age = 25;
console.log(age);
age = true;
console.log(age);
age = "hello";
console.log(age);
age = { name: "mario", test: 64 };
console.log(age);
// ObjectやListは[]や{}で指定
let listTest = [];
listTest.push(5);
listTest.push("human");
listTest.push(false);
console.log(listTest);
let objectTest;
objectTest = { name: "mario", test: 64 };
console.log(objectTest);
objectTest = { name: "yoshi", test: "SF" };
console.log(objectTest);
//# sourceMappingURL=sandbox2.js.map