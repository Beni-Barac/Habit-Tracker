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
