const inputTask = document.getElementById("inputTask");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

todoAdd.addEventListener("click", () => {
    if(todoInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = todoInput.value;
        li.addEventListener("click", () => li.remove()); // click to delete
        todoList.appendChild(li);
        todoInput.value = "";
    }
});

// Expense Tracker
const expName = document.getElementById("exp-name");
const expAmount = document.getElementById("exp-amount");
const expAdd = document.getElementById("exp-add");
const expList = document.getElementById("exp-list");
const expTotal = document.getElementById("exp-total");
let total = 0;

expAdd.addEventListener("click", () => {
    const name = expName.value.trim();
    const amount = parseFloat(expAmount.value);
    if(name && !isNaN(amount)) {
        const li = document.createElement("li");
        li.textContent = `${name}: $${amount.toFixed(2)}`;
        expList.appendChild(li);
        total += amount;
        expTotal.textContent = total.toFixed(2);
        expName.value = "";
        expAmount.value = "";
    }
});

// Notes
const noteInput = document.getElementById("note-input");
const noteAdd = document.getElementById("note-add");
const noteList = document.getElementById("note-list");

noteAdd.addEventListener("click", () => {
    if(noteInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = noteInput.value;
        li.addEventListener("click", () => li.remove()); // click to delete
        noteList.appendChild(li);
        noteInput.value = "";
    }
});

// Habits
const habits = document.querySelectorAll(".habit");
habits.forEach(habit => {
    habit.addEventListener("change", () => {
        if(habit.checked){
            habit.parentElement.style.textDecoration = "line-through";
        } else {
            habit.parentElement.style.textDecoration = "none";
        }
    });
});
