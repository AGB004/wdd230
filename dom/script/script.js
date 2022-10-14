// Create three variables that hold references to the input, button, and list elements using const.
const input = document.querySelector("ul");
const button = document.querySelector("input");
const list = document.querySelector("button");


button.addEventListener("click", function() {
    if (input.value.length === 0) {
        alert("Please add a chapter of the Book of Mormon");
    } 
    
    else {
        
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