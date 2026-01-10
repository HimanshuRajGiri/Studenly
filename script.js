const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");

menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});



const bg = document.getElementById("background");

const images = [
    "auto.png",
    "auto1.png",
    "auto2.png"
];

let index = 0;

function changeBackground() {
    bg.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
}

// First load
changeBackground();

// Change every 3 seconds
setInterval(changeBackground, 5000);




/* ========= TO-DO-lLIST ============ */

const inputTask = document.getElementById("inputTask");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

/* ======== Add tasks ======== */

addTaskBtn.addEventListener("click", function () {
    const taskText = inputTask.value;
    if(taskText === ""){
        alert("please enter any task.");
        return;
    }

    /* == created a list to store the tasks == */

    const list = document.createElement("list");
    list.textContent = taskText;
    taskList.appendChild(list);
    inputTask.value="";

/* ======== Function to delete the task ======== */

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




/*======================== EXPENSE TRACKER ============================ */

const inputExp = document.getElementById("inputExp");
const inputAmt = document.getElementById("inputAmt");
const addExpBtn = document.getElementById("addExpBtn");
const expenseList = document.getElementById("expenseList");
const totalAmt = document.getElementById("totalAmt");

let total = 0;

/* ======== Function of Button to add expense ======== */

addExpBtn.addEventListener("click", function () {
    const expText = inputExp.value.trim();
    const expAmount = Number(inputAmt.value);

    if (expText === "" || expAmount <= 0) {
        alert("Please enter valid expense name and amount");
        return;
    }

    /* == created a list item == */
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = `${expText} - ₹${expAmount}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    /* == delete expense == */
    deleteBtn.addEventListener("click", function () {
        li.remove();
        total -= expAmount;
        totalAmt.textContent = total;
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    expenseList.appendChild(li);

    /* == update total == */
    total += expAmount;
    totalAmt.textContent = total;

    inputExp.value = "";
    inputAmt.value = "";
});



/* =========================== NOTES ============================ */

textNote = document.getElementById("textNote");
saveNote = document.getElementById("saveNote");
noteList = document.getElementById("noteList");


/* ========== For saving NOtes ===========*/
saveNote.addEventListener("click", function () {
    const text = textNote.value;

    if (text === "") {
        alert("Please, Enter any note!");
        return;
    }

    const list = document.createElement("list");

    list.textContent = text;
    noteList.appendChild(list);
    textNote.value ="";

/* ========= For deleteing Notes ========= */

deleteNoteBtn = document.createElement("button");
deleteNoteBtn.textContent = "delete";

deleteNoteBtn.addEventListener("click", function (){
    list.remove();
});

list.appendChild(deleteNoteBtn);
noteList.appendChild(list)
})




        // Function to load habits from localStorage
        function loadHabits() {
            const habits = ['exercise', 'study', 'reading'];
            habits.forEach(habit => {
                const checkbox = document.getElementById(habit);
                const saved = localStorage.getItem(`habit-${habit}`);
                if (saved === 'true') {
                    checkbox.checked = true;
                }
            });
        }

        // Function to save habit state
        function saveHabit(habit) {
            const checkbox = document.getElementById(habit);
            localStorage.setItem(`habit-${habit}`, checkbox.checked);
        }

        // Function to reset habits (uncheck all)
        function resetHabits() {
            const habits = ['exercise', 'study', 'reading'];
            habits.forEach(habit => {
                document.getElementById(habit).checked = false;
                localStorage.setItem(`habit-${habit}`, 'false');
            });
        }

        // Add event listeners to checkboxes
        document.getElementById('exercise').addEventListener('change', () => saveHabit('exercise'));
        document.getElementById('study').addEventListener('change', () => saveHabit('study'));
        document.getElementById('reading').addEventListener('change', () => saveHabit('reading'));

        // Load habits on page load
        window.addEventListener('load', loadHabits);

        // Toggle mobile menu
        function toggleMenu() {
            const nav = document.querySelector('nav');
            nav.classList.toggle('active');
        }