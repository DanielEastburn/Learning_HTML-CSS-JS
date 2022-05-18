// Old way: onclick in html

// function buttonClick(){
//     console.log('Button clicked');
// }


// ADD EVENT LISTENER //

document.getElementById('button').addEventListener('click', 
function(e){
    console.log(123)
    
    document.getElementById('header-title').textContent = 'Changed'
    document.querySelector('#main').style.backgroundColor = '#f4f4f4';
    
    console.log(e) // Loging the mouse event e passed to event listener.
    console.log(e.target) // Logging target element attribute of click event.
    console.log(e.target.id) 
    console.log(e.target.className)
    console.log(e.target.classList)

    var output = document.getElementById('output')
    output.innerHTML = '<h3>'+e.target.id+'</h3>' //Add html into dom on click

    console.log(e.type); // Logging event type

    console.log(e.clientX); // Logging mouse location on window x axis
    console.log(e.clientY); // Logging mouse locaion on window y axist

    console.log(e.offsetX); // Logging mouse location on element x axis
    console.log(e.offsetY); // Logging mouse location on element y axis

    console.log(e.altKey); // Logging weather the alt key is held down during the click event.
    console.log(e.ctrlKey); // Logging weather the control key is held down during the click event.
    console.log(e.shiftKey); // Logging weather the shift key is held down during the click event.
    
});

// Best practice ('event', function(){}) can be a named function with no brackets.
// Can aslo be an arrow function () => {}
// Can be stored in variable.

var button2 = document.getElementById('button2')

button2.addEventListener('click', runEvent); // Click Event
button2.addEventListener('dblclick', runEvent); // Doubleclick Event
button2.addEventListener('mousedown', runEvent); // Mouse down Event
button2.addEventListener('mouseup', runEvent); // Mouse up Event


var box = document.getElementById('box')

// Mouse Enter and Leave fire only when moving cursor into the parent element. 
box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseleave', runEvent);

// Mouse Over and Out fire when moving over child elements internal to box.
box.addEventListener('mouseover', runEvent);
box.addEventListener('mouseout', runEvent);

box.addEventListener('mousemove', runEvent); // Fires when mouse moves at all.


function runEvent(e){
    console.log('EVENT TYPE: ' + e.type);

    output.innerHTML= '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '</h3>'

    box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";

    document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";

}

var itemInput = document.querySelector('input[type="text"]');
var from = document.querySelector('form');
var select = document.querySelector('select');

itemInput.addEventListener('keydown', runEvent2); 
// Fires when any key is pressed down.
itemInput.addEventListener('keyup', runEvent2); 
// Fires when any key is let go.
itemInput.addEventListener('keypress', runEvent2); 
// Fires when any key is let go.

itemInput.addEventListener('focus', runEvent2); 
// Fires when input focused.
itemInput.addEventListener('blur', runEvent2); 
// Fires when input unfocused.

itemInput.addEventListener('cut', runEvent2); 
// Fires when text is cut
itemInput.addEventListener('paste', runEvent2);
 // Fires when text is paste
itemInput.addEventListener('input', runEvent2); 
// Fires when any input action is taken.

select.addEventListener('change', runEvent2);
select.addEventListener('input', runEvent2);

from.addEventListener('submit', runEvent2)

function runEvent2(e){

    //e.preventDefault();

    console.log('EVENT TYPE: ' + e.type);
    console.log(e.target.value)
}