const yesNoForm = document.getElementById("add-entry-yes-no-form");
const measurableForm = document.getElementById("add-entry-measurable-form");
const cancelYesNo = document.getElementById("cancel-yes-no");
const cancelMeasurable = document.getElementById("cancel-measurable");

cancelYesNo.addEventListener("click", () => {
    yesNoForm.reset();
    yesNoForm.classList.add("hidden");
    yesNoForm.reset();
});

cancelMeasurable.addEventListener("click", () => {
    measurableForm.reset();
    measurableForm.classList.add("hidden");
    measurableForm.reset();
});

let pendingIndex = null;

function onEntryClick(index) {
    pendingIndex = index;
    if (habit.type === "yesno") yesNoForm.classList.remove("hidden");
    else measurableForm.classList.remove("hidden");
}

yesNoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    yesNoForm.classList.add("hidden");

    const formData = new FormData(yesNoForm);
    const value = formData.get("yes-no");

    const date = currentDisplayedDates[pendingIndex];
    habit.entries[date] = value;

    setTimeout(() => {
        yesNoForm.reset();
    }, 400);

    renderHabits();
});

measurableForm.addEventListener("submit", (event) => {
    event.preventDefault();
    measurableForm.classList.add("hidden");

    const formData = new FormData(measurableForm);
    const value = formData.get("value");

    const date = currentDisplayedDates[pendingIndex];
    habit.entries[date] = value;

    setTimeout(() => {
        measurableForm.reset();
    }, 400);

    renderHabits();
});
