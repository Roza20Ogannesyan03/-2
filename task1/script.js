let cityName = document.querySelector(".city-name");
let ul = document.querySelector(".city-list");

let btn = document.querySelector(".add-city");
function submitForm(event) {
    event.preventDefault();
    if (!cityName.textContent) {
        let li = document.createElement("li");
        li = document.createTextNode("Four");
        li.textContent = cityName.value;
        ul.appendChild(li);
    }
}

