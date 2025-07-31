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

    const entriesContainer = document.createElement("div");
    entriesContainer.className = "entry-container";

    const entryMap = {};
    for (const entry of habit.entries) {
        entryMap[entry.date] = entry.value;
    }

    for (let index = 0; index < 7; index++) {
        // we have to display only 7 values
        const entryDiv = document.createElement("div");
        entryDiv.className = "entry";

        const date = currentDisplayedDates[index];
        entryDiv.innerHTML = entryMap[date] || "?";

        entryDiv.addEventListener("click", () => {
            onEntryClick(index);
        });
        console.log(habit);
        entriesContainer.appendChild(entryDiv);
    }

    row.appendChild(nameDiv);
    row.appendChild(entriesContainer);
    habitContainer.appendChild(row);
}
