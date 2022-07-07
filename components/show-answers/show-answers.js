export default function ShowAnswer() {
  const button = document.querySelector('[data-js="button"]');
  const answer = document.querySelector('[data-js="answer"]');

  let answerShown = false;

  function onButtonClick() {
    answer.classList.toggle("card__show-answer__answer--hidden");
    answerShown = !answerShown;
    button.innerText = answerShown ? "Hide answer" : "Show answer";
  }

  button.addEventListener("click", onButtonClick);
}
