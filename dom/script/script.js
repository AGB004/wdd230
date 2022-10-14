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
// In the function block for adding a chapter, make sure the input is not blank and if not, do the following:

// create an li element

// create a delete button

// populate the li elements textContent or innerHTML with the input

// populate the button textContent with an ❌

// append the li element with the delete button

// append the list element with the li element just created and appended with text and the delete button

// add an event listener to the delete button that removes the li element when clicked

// send the focus to the input element

// clean up the successful add of a chapter by changing the input to nothing or the empty string and setting the focus to the input.


// Create an click event listener for the Add Chapter button using addEventListener and an anonymous function.  
// button.addEventListener('click', function() { ...





