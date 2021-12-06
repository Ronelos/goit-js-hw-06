function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let amount;
const inputEl = document.querySelector("#controls > input");
const createEl = document.querySelector("button[data-create]");
const destroyEl = document.querySelector("button[data-destroy]");
const boxEl = document.querySelector("#boxes");


function createBoxes(amount){
 const markup = "<div class='newDiv'></div>";
 
 
 let defSize = 30;
 for(let i = 1; i <= amount; i += 1) {
  boxEl.insertAdjacentHTML("beforeend", markup);
  boxEl.lastElementChild.style.backgroundColor = getRandomHexColor();
  if (i === 1) {
    boxEl.lastElementChild.style.width = `${defSize}px`;
    boxEl.lastElementChild.style.height = `${defSize}px`;
  }
  else { 
    defSize += 10;
  boxEl.lastElementChild.style.width = `${defSize}px`;
  boxEl.lastElementChild.style.height = `${defSize}px`;

}
 }
}

function getAmount () {
if(inputEl.value > 100) inputEl.value = 100;
if(inputEl.value < 1) inputEl.value = 1;
  amount = inputEl.value
 
} 
inputEl.addEventListener("input", getAmount)
createEl.addEventListener("click", () => createBoxes(amount))
destroyEl.addEventListener("click", () => boxEl.innerHTML = "")
