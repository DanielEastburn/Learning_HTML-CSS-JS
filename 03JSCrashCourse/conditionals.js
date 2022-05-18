const x = 22;

const y = 10;

// == - maches just the value.
// === - maches value and data type.

if(x > 5 || y > 10){
    console.log("x larger than 5");
} 
else if(x>10){
    console.log("x is greater than 10");
}
else {
    console.log("x is less than 10");
}

// || - OR one or the other is true.
// && - AND both statements are true.
//! - NOT statement is not true.

const color = x > 10 ? "red" : "blue";

// ? - ternary operator, if true "red", if false "blue".

console.log(color)

//Switch statements - used to perform different actions based on different conditions.
//Use the switch statement to select one of many code blocks to be executed.

switch(color){
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log("color is NOT red or blue")
}