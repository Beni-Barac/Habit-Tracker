const dateContainer = document.getElementById("date-container");

function renderDates() {
    const row = document.createElement("div");
    row.className = "habit-row";
    row.id = "date-row";

    const nameDiv = document.createElement("div");
    nameDiv.className = "habit-name";
    nameDiv.id = "date-style";
    nameDiv.innerText = "";

    const entriesDiv = document.createElement("div");
    entriesDiv.className = "entry-container";

    for (let i = 0; i < 7; i++) {
        const entry = document.createElement("div");
        entry.className = "entry";
        entry.innerHTML = "?";
        entriesDiv.appendChild(entry);
    }

    row.appendChild(nameDiv);
    row.appendChild(entriesDiv);
    dateContainer.appendChild(row);
}
