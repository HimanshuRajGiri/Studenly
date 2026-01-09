/* ========= Fetching all ids of TO-DO-lLIST ============ */

const inputTask = document.getElementById("inputTask");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");


/* ======== Function of Button to add tasks ======== */

addTaskBtn.addEventListener("click", function () {

    /* == created a variable to store task == */
    const taskText = inputTask.value;

    /* == checking if input is empty == */
    if(taskText === ""){
        alert("please enter any task.");
        return;
    }

    /* == created a list to store the tasks == */
    const list = document.createElement("list");
    list.textContent = taskText;

    /* == stored into list ==*/
    taskList.appendChild(list);

    /* = after adding the task input area will be empty = */
    inputTask.value="";


/* ============= Function to delete the task ================= */

/* == create a delete button  == */
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";

/* == function to delete the task == */
deleteBtn.addEventListener("click", function (){
    list.remove();
});

list.appendChild(deleteBtn);
taskList.appendChild(list);

inputTask.value="";

});
