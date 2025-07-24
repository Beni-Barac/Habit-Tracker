function renderHabit(name, type, description) {
    const row = document.createElement("div");
    row.className = "habit-row";

    const nameDiv = document.createElement("div");
    nameDiv.className = "habit-name";
    nameDiv.innerText = name;

    const entriesDiv = document.createElement("div");
    entriesDiv.className = "entry-container";

    for (let i = 0; i <= 5; i++) {
        const entry = document.createElement("div");
        entry.className = "entry";
        if (type === "yesno") {
            entry.innerHTML = "yesno" ? "yes" : "no";
        } else if (type === "measurable") {
            entry.innerHTML = 10;
        }
        entriesDiv.appendChild(entry);
    }

    row.appendChild(nameDiv);
    row.appendChild(entriesDiv);
    habitContainer.appendChild(row);
}
