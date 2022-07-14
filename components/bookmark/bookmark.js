export default function Bookmark(bookmarks) {
  bookmarks.addEventListener('click', () => {
    bookmarks.classList.toggle('bookmark-button--filled');
  });
}
