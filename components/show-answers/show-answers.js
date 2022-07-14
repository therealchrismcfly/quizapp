export default function ShowAnswer(button, answer) {
  let answerShown = false;
  button.addEventListener('click', () => {
    answer.classList.toggle('card__show-answer__answer--hidden');
    answerShown = !answerShown;
    button.innerText = answerShown ? 'Hide answer' : 'Show answer';
  });
}
