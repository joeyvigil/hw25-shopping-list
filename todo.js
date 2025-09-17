const myForm = document.getElementById("my-form");
const listGroup = document.getElementById("list-group");

myForm.addEventListener("submit", function(event) {
    // console.log(event.target);
    event.preventDefault();
    const formFields = document.querySelectorAll(".form-control");
    console.log(formFields);
    // const myUser = {};

    console.log(`${formFields[0].value}: ${formFields[1].value}`);
    const newItem = document.createElement("button");
    newItem.type = "button";
    newItem.className = "list-group-item list-group-item-action";
    newItem.innerHTML = `<b>${formFields[0].value}:</b> ${formFields[1].value}`;
    newItem.style.backgroundColor = "coral";
    // newItem.style.textDecoration = "line-through";
    listGroup.appendChild(newItem);
    formFields[0].value = "";
    formFields[1].value = "";

});

listGroup.addEventListener("click", function(event) {
    if (event.target.style.backgroundColor === "coral" && event.target.type === "button"){ 
        event.target.style.textDecoration = "line-through";
        event.target.style.backgroundColor = "lightgreen";
    } else if (event.target.style.backgroundColor === "lightgreen" && event.target.type === "button"){
        event.target.style.textDecoration = "none";
        event.target.style.backgroundColor = "coral";
    }
});
