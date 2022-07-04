let button = document.querySelector('[data-js="button"]');
let text = document.querySelector('[data-js="text"]');
function changeColor() {
  text.classList.toggle("text--colored");
}
button.addEventListener("click", changeColor);
