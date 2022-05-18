//Constructor function (use capital)
//Template for an Object, used many times.
function Person(firstname, lastname, dob){
    this.fishName = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
    this.getDay = function(){
        return this.dob.getDay();
    }
}

//Add functions/methods to prototype instead of constructor function.
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

//Instantiate an Object with constructor function.
const Daniel = new Person("Daniel", "Eastburn", "01/07/1997");

console.log(Daniel)
console.log(Daniel.fishName)
console.log(Daniel.dob.getFullYear())
console.log(Daniel.getDay())

console.log(Daniel.getBirthYear()) //Function in prototype.

//Classes
//Does the exact same thing as above. Template for Objects
//Syntactic Sugar - Prettyer way to write it.

class ClassPerson {
    constructor(firstname, lastname, dob) {
        this.fishName = firstname;
        this.lastName = lastname;
        this.dob = new Date(dob);
    }

    //put prototype object methods directly into the class.
    getBirthYear(){
        return this.dob.getFullYear();
    }
}

const Adam = new ClassPerson("Adam", "Eastburn", "06/14/1998")

console.log(Adam)
console.log(Adam.getBirthYear())



