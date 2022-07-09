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

    const cardQuestion = document.createElement("p");
    cardQuestion.classList.add("card__question");
    cardQuestion.innerText = question.quest;

    const bookmarkButton = document.createElement("button");
    bookmarkButton.classList.add("bookmark-button");

    /* const bookmarkButtonIcon = document.createElement("svg");
    bookmarkButtonIcon.classList.add("bookmark-button__icon");
    bookmarkButtonIcon.innerHTML = */

    const showAnswerContainer = document.createElement("div");
    showAnswerContainer.classList.add("card__show-answer");

    const showAnswerButton = document.createElement("button");
    showAnswerButton.classList.add("card__show-answer__button");
    showAnswerButton.innerText = "Show Answer";
    showAnswerButton.addEventListener("click", () => {
      cardAnswer.classList.toggle("card__show-answer__answer--hidden");
    });

    const cardAnswer = document.createElement("p");
    cardAnswer.classList.add("card__show-answer__answer");
    cardAnswer.innerText = question.answer;
    cardAnswer.classList.add = "card__show-answer__answer--hidden";

    const tagContainer = document.createElement("ul");
    tagContainer.classList.add("card__taglist");

    const cardTag = document.createElement("button");
    cardTag.classList.add("card__taglist__item");
    cardTag.innerText = question.tags;

    //Tags erstellen
    /*const tagContainer = document.createElement("ul");
    tagContainer.classList.add("card__taglist");

    question.tags.forEach((tag) => {
      const cardTag = document.createElement("button");
      cardTag.classList.add("card__taglist__item");
      cardTag.innerText = tag;
    });*/

    //dranhängen
    quizCard.append(
      cardQuestion,
      bookmarkButton,
      showAnswerContainer,
      cardAnswer,
      tagContainer
    );

    showAnswerContainer.append(showAnswerButton);
    tagContainer.append(cardTag);
    main.append(quizCard);
  });
}
