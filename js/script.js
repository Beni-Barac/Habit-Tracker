const habitContainer = document.getElementById("habit-container");

document.addEventListener("DOMContentLoaded", () => {
    renderDates();
});

// TODO make each habit have a unique id and then render only the modifyed habbit by eliminating it's prev version and appending the new one in the right position (using index)
function renderHabits() {
    habitContainer.innerHTML = "";
    for (habit of habits) {
        renderHabit(habit);
    }
}
