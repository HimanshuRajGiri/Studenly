// To-Do List
const todoInput = document.getElementById("todo-input");
const todoAdd = document.getElementById("todo-add");
const todoList = document.getElementById("todo-list");

todoAdd.addEventListener("click", () => {
    if(todoInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = todoInput.value;
        li.addEventListener("click", () => li.remove()); // click to delete
        todoList.appendChild(li);
        todoInput.value = "";
    }
});


