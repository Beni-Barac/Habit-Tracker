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

document.addEventListener("DOMContentLoaded", () => {
    renderDates();
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

    addHabitToArray(data["task-name"], data.type, data.description);
    renderHabits();
});

function renderHabits() {
    habitContainer.innerHTML = "";
    for (habit of habits) {
        renderHabit(habit);
    }
}

function toggleYesNo(habitIndex, dayIndex) {}

function setMeasurableValue(habitIndex, dayIndex, value) {}
