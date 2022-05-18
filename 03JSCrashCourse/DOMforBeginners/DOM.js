//Document Object Model
//Tree structure of HTML document.

//window object is highest in the tree
console.log(window)


//Selectors:

//Single element

console.log(document.getElementById("my-form"));
const form = document.getElementById("my-form");
console.log(form) //Can store in variable.

console.log(document.querySelector("#my-form"))
console.log(document.querySelector('h1')) //Works like Jquery, can select anything.


//Multiple element
console.log(document.querySelectorAll(".item")) //Always use
//Creates Nodelist/Array, array methods can be used on it.

console.log(document.getElementsByClassName("item"))
//Creates HTMLCollection, can't use array methods on it.

console.log(document.getElementsByTagName("li"))
//Creates HTMLCollection, can't use array methods on it.


const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item))

const ul = document.querySelector(".items");

//ul.remove(); //.remove() - Method removes selected item from DOM
//ul.lastElementChild.remove();

ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "Dan";
ul.lastElementChild.innerHTML = "<h1>Eastburn</h1>";

const button = document.querySelector(".btn");
button.style.color = "red";


