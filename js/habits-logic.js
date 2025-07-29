// const habit = {
//     name: "Read Bible",
//     type: "yesno",
//     description: "Read 10 mins",
// TODO description: {value, unit}
//     entries: [
//         { index: "1", date: "2025-07-24", value: "yes" },
//         { index: "2", date: "2025-07-23", value: "no" },
//     ],
// };

let habits = [];

function addHabitToArray(name, type, description) {
    habits.push({
        name: name,
        type: type,
        description: description,
        entries: []
    });
}

function renderHabit(habit) {
    const row = document.createElement("div");
    row.className = "habit-row";

    const nameDiv = document.createElement("div");
    nameDiv.className = "habit-name";
    nameDiv.innerText = habit.name;

    const entriesDiv = document.createElement("div");
    entriesDiv.className = "entry-container";

    for (let index = 0; index < 7; index++) {
        const entry = document.createElement("div");
        entry.className = "entry";
        entry.innerHTML = "?";
        entry.addEventListener("click", () => {
            habit.entries.push(addEntry(index));
            renderHabits();
        });
        entriesDiv.appendChild(entry);
    }

    row.appendChild(nameDiv);
    row.appendChild(entriesDiv);
    habitContainer.appendChild(row);
}
