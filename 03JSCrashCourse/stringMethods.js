const s = "String Methods";

console.log(s)

//Method is basically a function that is associated with an object. Methods have parenthesis ().

//Properties are aspects of strings. No Parenthesis ().

//.length property returns length of string.
console.log(s.length);

//.toUpperCase() method turns all string characters upper case.
console.log(s.toUpperCase());

//.substring(startIndex, endbeforeIndex);  First Index 0
console.log(s.substring(0, 6));

//Can chain methods together. returns METHOD
console.log(s.toUpperCase().substring(7, 13))

//.split splits string into an Array. Paramenter is the seperator od each array element from the string.
console.log(s.split(" "))





