const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit); 
//Function written outside of event.

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === ""){
        console.warn("Name field empty.")
        msg.innerHTML = "ENTER NAME!!"
        msg.classList.add("error");
    }
    else{
        console.log("Name Input: " + nameInput.value)
        msg.innerHTML = ""
        msg.classList.remove("error");

        const listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))

        userList.appendChild(listItem);

        //clear fields
        nameInput.value = "";
        emailInput.value = "";
    }
}

//save data - backend database - NodeJS
//Fetch API - AJAX
//Local Storage - In Browser

