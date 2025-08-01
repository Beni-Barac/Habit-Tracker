// const habit = {
//     name: "Read Bible",
//     type: "yesno",
//     description: "Read 10 mins",
//     entries: [
//         { index: "1", date: "2025-07-24", value: "yes" },
//         { index: "2", date: "2025-07-23", value: "no" },
//     ],
// };

let habits = [];

function addHabitToArray(name, type, unit, description) {
    habits.push({
        name: name,
        type: type,
        unit: unit,
        description: description,
        entries: {}
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

    for (let index = 0; index < 7; index++) {
        // we have to display only 7 values
        const entryDiv = document.createElement("div");
        entryDiv.className = "entry";

        const date = currentDisplayedDates[index];
        const entryDivValue = document.createElement("div");
        entryDivValue.className = "entry-value";
        entryDivValue.innerHTML = habit.entries[date] || "?";

        entryDiv.appendChild(entryDivValue);

        if (habit.unit) {
            const entryDivUnit = document.createElement("div");
            entryDivUnit.className = "entry-unit";
            entryDivUnit.innerHTML = habit.unit;
            entryDiv.appendChild(entryDivUnit);
        }

        entryDiv.addEventListener("click", () => {
            onEntryClick(index);
        });
        entriesContainer.appendChild(entryDiv);
    }

    row.appendChild(nameDiv);
    row.appendChild(entriesContainer);
    habitContainer.appendChild(row);
}
