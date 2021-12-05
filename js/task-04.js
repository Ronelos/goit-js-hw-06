const counterValue  = document.querySelector("#value");

debugger

const dec = document.querySelector('button[data-action="decrement"]');
const inc = document.querySelector('button[data-action="increment"]');
const decClick = () => counterValue.textContent = +counterValue.textContent -1;
dec.addEventListener("click", decClick);
const incClick = () => counterValue.textContent = Number(counterValue.textContent) +1;
inc.addEventListener("click", incClick);
