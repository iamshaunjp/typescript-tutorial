// explicit types --> 
let character: string // initialize this variable and don't give any value, but in future only allow string in character variable.
let age: number
let isLoggedIn: boolean
age = 45
isLoggedIn = false

// arrays -->
let ninjas: string[] = []
ninjas.push('john')

// union type -->
let mixed: (string|number|boolean)[] = []
mixed.push('hello') 
mixed.push(6)
mixed.push(false)
console.log(mixed)

let uid: string|number
uid = '123'
uid = 123

// objects -->
let ninjaOne: object
ninjaOne = { name: 'tom', age: 19}
ninjaOne = [] // as arrays are also objects

let ninjaTwo: {
  name: string, 
  age: number,
  isLoggedIn: boolean,
}
ninjaTwo = { name: 'mohan', age: 19, isLoggedIn: false} 