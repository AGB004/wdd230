/* ---Example 1--- */

const button = document.getElementById("button");
const output1 = document.getElementById("div_1");
const clicked = function() {
    let pressed_button = document.createElement("p");
    pressed_button.innerHTML = "New paragraph added";
    output1.appendChild(pressed_button)
}
button.addEventListener("click", clicked);

/* ---Example 2--- */

const input = document.getElementById("input");
const output2 = document.getElementById("paragraph_1");
const pressed = function() {
    output2.innerHTML = input.value;
}
input.addEventListener("keypress", pressed);