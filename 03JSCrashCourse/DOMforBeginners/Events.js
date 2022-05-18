const button = document.querySelector(".btn");

button.addEventListener("click", (e) => {
    e.preventDefault(); //stop form submitting.
    console.log("click");
    console.log(e.target); //Element that the event is on.
    console.log(e);
    document.querySelector("#my-form").style.background = "#ccc";
    document.querySelector("body").classList.add("bg-dark")//Add class to tag.
    document.querySelector(".items").lastElementChild.innerHTML = "<h1>Hello<h1>";
});

//different events mouseover mouseout.



