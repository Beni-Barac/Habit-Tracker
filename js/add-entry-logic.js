const yesNoForm = document.getElementById("add-entry-yes-no-form");
const measurableForm = document.getElementById("add-entry-measurable-form");
const cancelYesNo = document.getElementById("cancel-yes-no");
const cancelMeasurable = document.getElementById("cancel-measurable");

cancelYesNo.addEventListener("click", () => {
    yesNoForm.reset();
    yesNoForm.classList.add("hidden");
});

cancelMeasurable.addEventListener("click", () => {
    measurableForm.reset();
    measurableForm.classList.add("hidden");
});

let pendingIndex = null;

function onEntryClick(index) {
    pendingIndex = index;
    yesNoForm.classList.remove("hidden");
}

yesNoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    yesNoForm.classList.add("hidden");

    const formData = new FormData(yesNoForm);
    const value = formData.get("yes-no");

    const date = currentDisplayedDates[pendingIndex];
    habit.entries[date] = value;

    setTimeout(() => {
        form.reset();
    }, 400);

    renderHabits();
});
