import Bookmark from "../bookmark/bookmark.js";
export default function Questions() {
  const questions = [
    {
      quest: "Welches Tier ziert das Wappen der Lennisters?",
      answer: "Der Löwe",
      tags: ["Series", "Game of Thrones", "Fantasy"],
    },

    {
      quest: "Wer tötete Cerceis Tochter Myrcella?",
      answer: "Ellaria Sand",
      tags: ["Series", "Game of Thrones", "Fantasy"],
    },

    {
      quest: "Wie heißt das Schwert von Arya Stark?",
      answer: "Nadel",
      tags: ["Series", "Game of Thrones", "Fantasy"],
    },

    {
      quest:
        "Wieviele Dracheneier bekommt Daenerys zu ihrer Hochzeit geschenkt?",
      answer: "Drei",
      tags: ["Series", "Game of Thrones", "Fantasy"],
    },

    {
      quest: "Welcher der Schattenwölfe starb zuerst?",
      answer: "Lady",
      tags: ["Series", "Game of Thrones", "Fantasy"],
    },
  ];

  //get main
  const main = document.querySelector('[data-js="content"]');

  //get QuestionCards
  questions.forEach((question) => {
    const quizCard = document.createElement("article");
    quizCard.classList.add("card");
    // dann svg und das an Button appenden, button.innerHtml = svg als string reinpacken.
    //ul erstellen, Rest drin verschachteln.

    //Card Question
    const cardQuestion = document.createElement("p");
    cardQuestion.classList.add("card__question");
    cardQuestion.innerText = question.quest;

    //Bookmark Button
    const bookmarkButton = document.createElement("button");
    bookmarkButton.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
  
    viewBox="0 0 512 512"
  >
    <path
      d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z"
    />
  </svg>`;
    bookmarkButton.classList.add("bookmark-button");
    Bookmark(bookmarkButton);

    //Show Answer Button

    const showAnswerContainer = document.createElement("div");
    showAnswerContainer.classList.add("card__show-answer");

    const showAnswerButton = document.createElement("button");
    showAnswerButton.classList.add("card__show-answer__button");
    showAnswerButton.innerText = "Show Answer";
    let answerShown = false;
    showAnswerButton.addEventListener("click", () => {
      cardAnswer.classList.toggle("card__show-answer__answer--hidden");
      answerShown = !answerShown;
      showAnswerButton.innerText = answerShown ? "Hide answer" : "Show answer";
    });

    //Card Answer
    const cardAnswer = document.createElement("p");
    cardAnswer.classList.add(
      "card__show-answer__answer",
      "card__show-answer__answer--hidden"
    );
    cardAnswer.innerText = question.answer;

    //Tags
    const tagContainer = document.createElement("ul");
    tagContainer.classList.add("card__taglist");

    question.tags.forEach((tag) => {
      const cardTag = document.createElement("button");
      cardTag.classList.add("card__taglist__item");
      cardTag.innerText = tag;
      tagContainer.append(cardTag);
    });

    //Alles dranhängen
    quizCard.append(
      cardQuestion,
      bookmarkButton,
      showAnswerContainer,
      cardAnswer,
      tagContainer
    );

    /*bookmarkButton.append(bookmarkButtonIcon);*/
    showAnswerContainer.append(showAnswerButton);
    main.append(quizCard);
  });
}
