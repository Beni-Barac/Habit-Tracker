const dateContainer = document.getElementById("date-container");
const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

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

    for (d of visibleDates()) {
        const entry = document.createElement("div");
        entry.className = "entry";
        entry.innerHTML = d;
        entriesDiv.appendChild(entry);
    }

    row.appendChild(nameDiv);
    row.appendChild(entriesDiv);
    dateContainer.appendChild(row);
}

function visibleDates() {
    let count = 0;
    const datesToRender = [];

    while (datesToRender.length < 7) {
        const newDate = new Date();
        newDate.setDate(newDate.getDate() - count);
        datesToRender.push(`${month[newDate.getMonth()]} ${newDate.getDate()}`);
        count = count + 1;
    }
    return datesToRender;
}
