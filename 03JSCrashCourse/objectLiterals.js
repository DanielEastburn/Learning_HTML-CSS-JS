//Object Literals - comma-seperated list of name-value pairs.

const person = {
    firstName: "Daniel",
    lastName: "Eastburn",
    age: 25,
    hobbies: ["Gaming", "Archery", "Streaming"],
    //object within an object: embedded
    address: {
        village: "croft",
        County: "Cheshire",
        Country: "UK"
    }
}

console.log(person)

//dot notation to target specific values of object.
console.log(person.firstName)

//print object array list item: use index
console.log(person.hobbies[1])

//print object item from object inside object: use dot
console.log(person.address.village)

//can pull values out of an object for use: deconstruction
const {firstName, lastName, address:{village}} = person;
console.log(firstName, lastName, village);

//can directly add properties to object:
person.email = "dan@gmail.com";
console.log(person.email)

//generally deal with lists(arrays) of objects, sperated by commas.

const todos = [
    {
        id: 1,
        text: "Wash clothes.",
        isCompleted: true
    },
    {
        id: 2,
        text: "Doctors appointment",
        isCompleted: false
    },
    {
        id: 3,
        text: "Work",
        isCompleted: true
    }
];

console.log(todos)

//print text from second list object: index, dot
console.log(todos[1].text)

//JSON - Javascript Object Notation, used when data is sent from a server to a webpage.

//JSON.stringify - method for changeing js objects into json ready objects.
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);