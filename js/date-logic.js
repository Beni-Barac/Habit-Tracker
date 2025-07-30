const dateContainer = document.getElementById("date-container");
const prevDates = document.getElementById("left-arrow");
const nextDates = document.getElementById("right-arrow");
let count = 0;

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
    dateContainer.innerHTML = "";
    const row = document.createElement("div");
    row.id = "date-row";

    const nameDiv = document.createElement("div");
    nameDiv.id = "date-name";
    nameDiv.innerText = "";

    const entriesDiv = document.createElement("div");
    entriesDiv.id = "date-entry-container";

    for (date of visibleDates()) {
        const entry = document.createElement("div");
        entry.className = "date-entry";
        entry.innerHTML = date;
        entriesDiv.appendChild(entry);
    }

    row.appendChild(nameDiv);
    row.appendChild(entriesDiv);
    dateContainer.appendChild(row);
}

function visibleDates() {
    const datesToRender = [];
    let localCount = count;
    while (datesToRender.length < 7) {
        const newDate = new Date();
        newDate.setDate(newDate.getDate() - localCount);
        datesToRender.push(`${month[newDate.getMonth()]} ${newDate.getDate()}`);
        localCount = localCount + 1;
    }

    currentDisplayedDates = datesToRender;
    return datesToRender;
}

prevDates.addEventListener("click", () => {
    if (count) count = count - 1;
    else alert("Most recent date already loaded");
    renderDates();
    renderHabits();
});

nextDates.addEventListener("click", () => {
    count = count + 1;
    renderDates();
    renderHabits();
});
