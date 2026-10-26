const heading = document.querySelector("#demo");

// Change the heading color and alignment
document.querySelectorAll("[data-colorrr]").forEach(function (item) {
    item.addEventListener("click", function () {
        heading.style.color = item.dataset.colorrr;
        heading.style.textAlign = item.dataset.location;
    });
});

// Select the to-do list elements
const myForm = document.querySelector("#myForm");
const worksInput = document.querySelector("#works");
const result = document.querySelector("#result");

// Add a new task
myForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const works = worksInput.value.trim();

    if (works === "") {
        alert("Please enter a task!");
        worksInput.focus();
        return;
    }

    // Create a new list item
    const myLi = document.createElement("li");
    myLi.className =
        "list-group-item d-flex justify-content-between align-items-center gap-3";

    // Create the task text
    const taskText = document.createElement("span");
    taskText.textContent = works;
    taskText.className = "flex-grow-1";
    taskText.style.cursor = "pointer";

    // Mark the task as completed when clicked
    taskText.addEventListener("click", function () {
        taskText.classList.toggle("text-decoration-line-through");
        taskText.classList.toggle("text-secondary");
    });

    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "btn btn-danger btn-sm";
    deleteButton.textContent = "🗑️";
    deleteButton.title = "Delete task";
    deleteButton.setAttribute("aria-label", "Delete task");

    // Delete the task when the button is clicked
    deleteButton.addEventListener("click", function () {
        myLi.remove();
    });

    // Add the task text and delete button to the list item
    myLi.appendChild(taskText);
    myLi.appendChild(deleteButton);
    result.appendChild(myLi);

    // Clear the input field and set focus back to it
    worksInput.value = "";
    worksInput.focus();
});