const form = document.getElementById("new-task-form");
const addTask = document.getElementById("add-task");
const cancelNewTask = document.getElementById("cancel-new-task");
const habitContainer = document.getElementById("habit-container");

addTask.addEventListener("click", () => {
    form.classList.remove("hidden");
});

cancelNewTask.addEventListener("click", () => {
    form.reset();
    form.classList.add("hidden");
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.classList.add("hidden");

    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    setTimeout(() => {
        form.reset();
    }, 400);

    addHabit(data["task-name"], data["type"], data["description"]);
});

function addHabit(name, type, description) {
    const row = document.createElement("div");
    row.className = "habit-row";

    const nameDiv = document.createElement("div");
    nameDiv.className = "habit-name";
    nameDiv.innerText = name;

    const entriesDiv = document.createElement("div");
    entriesDiv.className = "entry-container";

    const dateRow = document.createElement("div");
    dateRow.className = "habit-row";

    for (let i = 0; i <= 5; i++) {
        const date = new Date();
        date.setDate(date.getDate());
        // console.log(date);

        const entry = document.createElement("div");
        entry.className = "entry";
        entry.innerHTML = "yes";
        entriesDiv.appendChild(entry);
    }

    row.appendChild(nameDiv);
    row.appendChild(entriesDiv);
    habitContainer.appendChild(row);
}

addHabit("Drink Water", "yesno", "8 glasses");
