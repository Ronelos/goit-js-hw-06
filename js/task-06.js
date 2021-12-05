const inputEl = document.getElementById("validation-input");
const validText = inputEl.dataset.length;
const getValue = () => {
    const value = inputEl.value.length
    value == validText?inputEl.className = "valid": inputEl.className = "invalid"


}
inputEl.addEventListener("blur", getValue);