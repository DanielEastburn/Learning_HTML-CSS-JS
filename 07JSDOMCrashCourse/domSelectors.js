// EXAMINE THE DOCUMENT OBJECT //

// Shows all attributes and properties of the document.
// console.dir(document);
 
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all); // Creates HTMLcollection list of elements.
console.log(document.all[10]); // Can access elements via index.
// document.all[10].textContent = 'Hello';
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);


// GETELEMENTBYID //
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header')
console.log(headerTitle);

//Can use textContent and innerText interchangably for the most part.
headerTitle.textContent = 'Hello'
headerTitle.innerText = 'Goodbye' 
//Inner text pays attention to styles.

headerTitle.innerHTML = '<h3>Hello</h3>' 
//inserts html into selected tag.

header.style.borderBottom = 'solid 3px #000';
// .style used to add css styles to elements.


// GETELEMENTSBYCLASSNAME //
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

// items.style.backgroundColor = '#f4f4f4'; Gives error

for(var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}



// GETELEMENTSBYTAGNAME //
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.color = 'yellow';

for(var i = 0; i < li.length; i++){
    li[i].style.backgroundColor = '#f4f4f4'
}


// QUERYSELECTOR //
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World'

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND"

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';


// QUERYSELECTORALL //
var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}





