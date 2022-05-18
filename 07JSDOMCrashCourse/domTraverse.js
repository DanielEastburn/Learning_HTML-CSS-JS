// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');

// parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
console.log(itemList.childNodes) // Targets tags and line breaks
console.log(itemList.children) // Just targets the tags

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

// FirstChild
console.log(itemList.firstChild);
// FirstElementChild
console.log(items.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1'

// FirstChild
console.log(itemList.lastChild);
// FirstElementChild
console.log(items.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4'

// nextSibling
console.log(itemList.nextSibling);
// nextElementSibling
console.log(itemList.nextElementSibling);

// previousSibling
console.log(itemList.previousSibling);
// previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';


// createElement
var newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello';

// Add id
newDiv.id = 'hi';

// Add attribute
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello World');


// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.color = 'blue'
newDiv.style.fontSize = '30px'

container.insertBefore(newDiv, h1);


