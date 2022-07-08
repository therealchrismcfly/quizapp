export default function Bookmark() {
  const cardlist = document.querySelectorAll('[data-js="card"]');

  cardlist.forEach((card) => {
    const bookmarks = card.querySelector('[data-js="bookmark"]');
    const fill = card.querySelector('[data-js="filled"]');
    bookmarks.addEventListener("click", () => {
      fill.classList.toggle("bookmark-button__icon--filled");
    });
  });
}
