let button = document.querySelector('[data-js="button"]');
let answer = document.querySelector('[data-js="answer"]');

function onButtonClick() {
  answer.classList.toggle("card__show-answer__answer--hidden");
}

button.addEventListener("click", onButtonClick);
