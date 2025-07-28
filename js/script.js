const addTask = document.getElementById("add-task");
const cancelNewTask = document.getElementById("cancel-new-task");
const habitContainer = document.getElementById("habit-container");

document.addEventListener("DOMContentLoaded", () => {
    renderDates();
});

function renderHabits() {
    habitContainer.innerHTML = "";
    for (habit of habits) {
        renderHabit(habit);
    }
}

function toggleYesNo(habitIndex, dayIndex) {}

function setMeasurableValue(habitIndex, dayIndex, value) {}
