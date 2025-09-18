const myForm = document.getElementById("my-form");
const listGroup = document.getElementById("shopping-list");
let remaining = 0;
let completed = 0;

//load
if (localStorage.getItem("innerHTML")) {
    listGroup.innerHTML = localStorage.getItem("innerHTML");
    remaining = parseInt(localStorage.getItem("remaining"));
    completed = parseInt(localStorage.getItem("completed"));
    document.getElementById("total-count").innerText = remaining + completed;
    document.getElementById("completed-count").innerText  = completed;
    document.getElementById("remaining-count").innerText = remaining;
}

save = () => {
    localStorage.setItem("innerHTML", listGroup.innerHTML);
    localStorage.setItem("remaining", remaining);
    localStorage.setItem("completed", completed);
}

myForm.addEventListener("submit", (event) => {
    // console.log(event.target);
    event.preventDefault();
    const formFields = document.querySelectorAll(".form-control");
    // console.log(formFields);
    // const myUser = {};

    // console.log(`${formFields[0].value}: ${formFields[1].value}`);
    const newItem = document.createElement("button");
    newItem.type = "button";
    newItem.className = "list-group-item list-group-item-action";
    newItem.innerHTML = `<b>${formFields[0].value}:</b> ${formFields[1].value}`;
    newItem.style.backgroundColor = "tan";
    // newItem.style.textDecoration = "line-through";
    listGroup.appendChild(newItem);
    formFields[0].value = "";
    formFields[1].value = "";
    remaining++;
    document.getElementById("total-count").innerText = remaining + completed;
    document.getElementById("completed-count").innerText  = completed;
    document.getElementById("remaining-count").innerText = remaining;
    save();
});

listGroup.addEventListener("click", (event) => {
    if (event.target.style.backgroundColor === "tan" && event.target.type === "button"){ 
        event.target.style.textDecoration = "line-through";
        event.target.style.backgroundColor = "chocolate";
        remaining--;
        completed++;
    } else if (event.target.style.backgroundColor === "chocolate" && event.target.type === "button"){
        event.target.style.textDecoration = "none";
        event.target.style.backgroundColor = "tan";
        remaining++;
        completed--;
    }
    document.getElementById("total-count").innerText = remaining + completed;
    document.getElementById("completed-count").innerText  = completed;
    document.getElementById("remaining-count").innerText = remaining;
    save();
});

document.getElementById("clear-completed").addEventListener("click", () => {
    const items = listGroup.querySelectorAll("button");
    items.forEach(item => {
        if (item.style.backgroundColor === "chocolate") {
            listGroup.removeChild(item);
            completed--;
        }
    });
    document.getElementById("total-count").innerText = remaining + completed;
    document.getElementById("completed-count").innerText  = completed;
    document.getElementById("remaining-count").innerText = remaining;
    save();
});

document.getElementById("clear-all").addEventListener("click", () => {
    const items = listGroup.querySelectorAll("button");
    items.forEach(item => {
        listGroup.removeChild(item);
    });
    remaining = 0;
    completed = 0;
    document.getElementById("total-count").innerText = remaining + completed;
    document.getElementById("completed-count").innerText  = completed;
    document.getElementById("remaining-count").innerText = remaining;
    save();
});
