let greet: Function;

// greet = 'hey';

greet = () => {
    console.log('hello, again');
}

const add = (a: number, b: number, c: number | string = 10): void => {
    console.log(a + b);
    console.log(c);
}

add(5, 10, '20');

const minus = (a: number, b: number): number | string => {
    return a + b;
}

let result = minus(10, 7);

result = 'hello';
console.log(result);
