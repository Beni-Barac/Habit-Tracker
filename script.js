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

// const habit = {
//     name: "Read Bible",
//     type: "yesno",
//     description: "Read 10 mins",
//     entries: [
//         { index: "1", date: "2025-07-24", value: "yes" },
//         { index: "2", date: "2025-07-23", value: "no" },
//     ],
// };

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

    const newHabit = {
        name: data["task-name"],
        type: data.type,
        description: data.description,
        entries: [],
    };
});

function addHabitToArray() {}

function renderHabits() {
    habitContainer.innerHTML = "";
    //rerender everything with each new entry or habits list modification
}

function toggleYesNo(habitIndex, dayIndex) {}

function setMeasurableValue(habitIndex, dayIndex, value) {}
