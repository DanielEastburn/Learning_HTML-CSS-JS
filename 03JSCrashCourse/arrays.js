//Arrays - Variables that hold multiple values.

//"new" keyword is a constructor
const numbers = new Array(1,2,3,4)

console.log(numbers)
console.log(numbers.length)

//Normally create brackets without constructor.

const fruits = ["Apples", "Oranges", "Pears"];

console.log(fruits)

console.log(fruits[1])
//arrays 0 based in every language. 0 is first item index.

//adding an item by assigning. any data type in js arrays.
fruits[3] = "Grapes";
console.log(fruits)

//Array Methods
//.push pushes value onto the end
fruits.push("Banana")
console.log(fruits)

//.unshift adds array item to the start.
fruits.unshift("Mango")
console.log(fruits)

//.pop removes the last item.
fruits.pop();
console.log(fruits)

//check if a variable is an Array with isArray method. returns true or false.
console.log(Array.isArray(fruits));

//check index of particular array item with indexOf method. returns index number
console.log(fruits.indexOf("Apples"))


