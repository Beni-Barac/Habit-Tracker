const form = document.getElementById("new-task-form");
const addTask = document.getElementById("add-task");
const cancelNewTask = document.getElementById("cancel-new-task");

addTask.addEventListener("click", () => {
    form.classList.remove('hidden');
});

cancelNewTask.addEventListener("click", () => {
    form.reset();
    form.classList.add('hidden');
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.classList.add("hidden");
    setTimeout(() => {
        form.reset();
    }, 400);
});
