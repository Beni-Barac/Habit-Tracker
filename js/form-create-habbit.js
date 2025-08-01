const form = document.getElementById("new-task-form");
const addTask = document.getElementById("add-task");
const cancelNewTask = document.getElementById("cancel-task");

addTask.addEventListener("click", () => {
    form.classList.remove("hidden");
});

cancelNewTask.addEventListener("click", () => {
    form.reset();
    form.classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
    const unitPopup = document.getElementById("unit-popup");

    document.querySelectorAll('input[name="type"]').forEach((input) => {
        input.addEventListener("change", () => {
            const isMeasurable = input.value === "measurable";
            unitPopup.classList.toggle("hidden", !isMeasurable);
        });
    });
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
