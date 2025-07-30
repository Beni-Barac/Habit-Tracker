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

    for (let index = 0; index < 7; index++) {
        // we have to display only 7 values
        const entryDiv = document.createElement("div");
        entryDiv.className = "entry";

        let value = "?";
        for (const entry of habit.entries) {
            // here we are searching for the entry object within the habit.entries array which has the date property value
            // the same as the date above the entry that we want to change (so basically making sure that we render the entry in the right place)
            if (entry.date === currentDisplayedDates[index]) {
                value = entry.value;
                break;
            }
        }
        entryDiv.innerHTML = value;

        entryDiv.addEventListener("click", () => {
            habit.entries.push(addEntry(index));
            renderHabits();
        });
        entriesContainer.appendChild(entryDiv);
    }

    row.appendChild(nameDiv);
    row.appendChild(entriesContainer);
    habitContainer.appendChild(row);
}
