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
    row.className = "habit-row";
    row.id = "date-row";

    const nameDiv = document.createElement("div");
    nameDiv.className = "habit-name";
    nameDiv.id = "date-style";
    nameDiv.innerText = "";

    const entriesDiv = document.createElement("div");
    entriesDiv.className = "entry-container";

    for (date of visibleDates()) {
        const entry = document.createElement("div");
        entry.className = "entry";
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
    return datesToRender;
}

prevDates.addEventListener("click", () => {
    if (count) count = count - 1;
    else alert("Most recent date already loaded");
    renderDates();
});

nextDates.addEventListener("click", () => {
    count = count + 1;
    renderDates();
});
