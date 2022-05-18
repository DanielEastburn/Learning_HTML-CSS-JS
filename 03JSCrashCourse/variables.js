console.log("Hello World");
console.error("This is an errror")
console.warn("This is a Warning")

//Variables
//var, let, const

//var globally scoped, don't use

//let re-asign values

//const - constant stays the same, use unless you know you want to reassign it

let age = 25

console.log(age)

age = 26

console.log(age);

//Data Types

//Strings, Numbers, Boolean, null, undefined

const name = "Daniel";
const age2 = 25;
const isCool = true;
const rating = 4.5;
const x = null;
const y = undefined; //defining undefined
let z; // also undefined

console.log(name, age2, isCool, rating, x, y, z)
console.log(typeof name, typeof age2, typeof isCool, typeof rating, typeof x, typeof y, typeof z)
//typeof returns data type of variable


//Strings - Concatenation

console.log("My name is name and I am age.")
console.log("My name is " + name + " and I am " + age2)

//Strings - Template Strings, have to use special quotes: `

console.log(`My name is ${name} and I am ${age2}`)

