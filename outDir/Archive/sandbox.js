"use strict";
// 型推論
// arrays
let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
console.log(names);
// names.push(3);
// names[1] = 3;
let numbers = [10, 20, 12, 15, 'test'];
numbers.push(25);
console.log(numbers);
// numbers.push('shaun');
// numbers[0] = 'shaun';
let mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
console.log(mixed);
// objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking']
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40,
    // skills: ['running'],
};
console.log(ninja);
//# sourceMappingURL=sandbox.js.map