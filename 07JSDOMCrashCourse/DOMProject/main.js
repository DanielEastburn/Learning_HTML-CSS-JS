var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event.
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);


// Add item.
function addItem(e){

    e.preventDefault();
    console.log('Submit');

    // Get input value
    var newItem = document.getElementById('item');

    // Create new li Element
    var li = document.createElement('li');
    // Add class name
    li.className = 'list-group-item'
    // li.classList.add('list-group-item')

    // Add text node with input value and x button (innerHTML)
    li.innerHTML = `${newItem.value} <button class="btn btn-danger btn-sm float-right delete">X</button>`

    // Tutorial Way
    // li.appendChild(document.createTextNode(newItem.value));
    // var delbutton = document.createElement('button');
    // delbutton.className = 'btn btn-danger btn-sm float-right delete'
    // delbutton.appendChild(document.createTextNode('X'));
    // li.appendChild(delbutton)

    // Append button to li
    itemList.appendChild(li)

    console.log(li)
   
}

// Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var delparentli = e.target.parentElement;
            itemList.removeChild(delparentli)
        }
    }
}

// Filter Items
function filterItems(e){
    // Convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get list items
    var items = itemList.getElementsByTagName('li');
    // Convert HTMLCollection to an array
    Array.from(items).forEach((item) => {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
        }else {
            item.style.display = 'none'
        }
    })

}