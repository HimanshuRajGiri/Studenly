const inputTask = document.getElementById("inputTask");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");


addTaskBtn.addEventListener("click",function () {

    const taskText = inputTask.value;

    if (taskText === ""){
        alert("Please, Enter any task.");
        return;
    }

    const list = document.createElement("list");
    list.textContent = taskText;

    taskList.appendChild(list);

    inputTask.value = "";
});