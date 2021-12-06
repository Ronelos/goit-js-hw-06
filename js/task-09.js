function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorBtn = document.querySelector(".change-color");
const changeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
}
colorBtn.addEventListener("click", changeColor)

             