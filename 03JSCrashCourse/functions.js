function addNums(num1 = 3, num2 = 1){
    console.log(num1 + num2);
}

addNums()//default paraments assignable 
addNums(4, 6) //call funtion, pass perameters - overwrite default

function addNums2(num1 = 5, num2 = 9){
    return num1 + num2 //return - result/value of the function when called.
}

console.log(addNums2())

//Arrow functions

const addNums3 = (num1 = 20, num2 = 32) =>{
    return num1 + num2;
}

console.log(addNums3());