//Show answer

let button = document.querySelector('[data-js="button"]');
let answer = document.querySelector('[data-js="answer"]');

function onButtonClick() {
  answer.classList.toggle("card__show-answer__answer--hidden");
}

button.addEventListener("click", onButtonClick);

//Bookmark Button

let bookmark = document.querySelector('[data-js="bookmark"]');
let fill = document.querySelector('[data-js="filled"]');

function clickBookmark() {
  fill.classList.toggle("bookmark-button__icon");
}

bookmark.addEventListener("click", clickBookmark);
