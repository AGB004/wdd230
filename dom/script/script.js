// Create three variables that hold references to the input, button, and list elements using const.
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");


button.addEventListener("click", function() {
    if (input.value.length === 0) {
        document.getElementById("favchap").placeholder = "Please insert text, EX: Alma 5";
    } 
    
    else {
        document.getElementById("favchap").placeholder = "Alma 5";

        const listItem = document.createElement("li");
        const listText = document.createElement("span");
        const listBtn = document.createElement("button");

        listItem.appendChild(listText);
        listText.textContent = input.value;
        listItem.appendChild(listBtn);
        listBtn.textContent = "❌";

        list.appendChild(listItem);

        input.value = "";

        listBtn.addEventListener("click", function() {
            list.removeChild(listItem);
        });
    };
    input.focus();
});