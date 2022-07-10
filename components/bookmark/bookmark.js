export default function Bookmark() {
  const cardlist = document.querySelectorAll('[data-js="card"]');

  cardlist.forEach((card) => {
    const bookmarks = card.querySelector('[data-js="bookmark"]');
    bookmarks.addEventListener("click", () => {
      bookmarks.classList.toggle("bookmark-button--filled");
    });
  });
}
