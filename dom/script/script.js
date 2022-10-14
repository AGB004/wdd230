// Create three variables that hold references to the input, button, and list elements using const.
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

// Create an click event listener for the Add Chapter button using addEventListener and an anonymous function.
button.addEventListener("click", function() {
    // In the function block for adding a chapter, make sure the input is not blank
    if (input.value.length === 0) {
        // change placeholder to remind user to input value
        document.getElementById("favchap").placeholder = "Please insert text, EX: Alma 5";
    } 
    //  and if not, do the following:
    else {
        // return placeholder to original
        document.getElementById("favchap").placeholder = "Alma 5";

        // a. b. Create three variables that hold references to create li, button, and span elements using const.
        const list_item = document.createElement("li");
        const input_text = document.createElement("p");
        const delete_button = document.createElement("button");

        // c. populate the li elements textContent or innerHTML with the input
        input_text.textContent = input.value;

        // d. populate the button textContent with an ❌
        delete_button.textContent = "❌";

        // e. append the li element with the delete button
        list_item.appendChild(input_text);
        list_item.appendChild(delete_button);

        // f. append the list element with the li element just created and appended with text and the delete button
        list.appendChild(list_item);

        // g. add an event listener to the delete button that removes the li element when clicked
        delete_button.addEventListener("click", function() {
            list.removeChild(list_item);
        });
    };

    // h. send the focus to the input element
    input.focus();

    // i. clean up the successful add of a chapter by changing the input to nothing or the empty string and setting the focus to the input.
    input.value = "";
});