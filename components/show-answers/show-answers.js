export default function ShowAnswer() {
  const cardlist = document.querySelectorAll('[data-js="card"]');

  let answerShown = false;

  cardlist.forEach((card) => {
    const button = card.querySelector('[data-js="button"]');
    const answer = card.querySelector('[data-js="answer"]');

    button.addEventListener("click", () => {
      answer.classList.toggle("card__show-answer__answer--hidden");
      answerShown = !answerShown;
      button.innerText = answerShown ? "Hide answer" : "Show answer";
    });
  });
}
