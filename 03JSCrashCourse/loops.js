//For 
//Set iterator, condition, increment 
//Runs until condition is met/is true

for(let i = 0; i <= 5; i++){
    console.log(`For Loop Number: ${i}`);
}

//While
//Runs while the condition is true/is met
let w = 0
while(w < 5){
    console.log(`While Loop Number: ${w}`);
    w++
}


//Looping through arrays.
const todos = [
    {
        id: 1,
        text: "Wash clothes",
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

for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

//each array item stored in todo
for(let todo of todos){
    console.log(todo)
}

//High Order Array Methods
// forEach, map, filter

//.forEach() Method - calls a function for each element in an array. 
todos.forEach(function(todo){
    console.log(todo.text)
});

//.map() - Returns a new array from calling a function for every element.
//.map() - Does not change the original array.

const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText);

//.filter() Method - creates a new array filled with elements that pass a test provided by a function
//.filter() Method - does not change the original array.

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted)