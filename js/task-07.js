const inputEl = document.getElementById("font-size-control");
const spanEl = document.getElementById("text");
const changeFont = () => {
const rangeValue = inputEl.value;
spanEl.style.fontSize = `${rangeValue}px`;
}
inputEl.addEventListener("input", changeFont);