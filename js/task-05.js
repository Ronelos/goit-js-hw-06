const inputEl = document.querySelector("#name-input");
const outEl = document.querySelector("#name-output");
function onChangeName(e) { 
    e.currentTarget.value === "" ? outEl.textContent = "Anonymous" : outEl.textContent = e.currentTarget.value }
inputEl.addEventListener('input', onChangeName);
