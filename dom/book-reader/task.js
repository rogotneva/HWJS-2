const fontSizeArr = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');


fontSizeArr.forEach((element) => element.addEventListener('click', (event) => {
  fontSizeArr.forEach((element) => element.classList.remove('font-size_active'));
  event.target.classList.add('font-size_active');
  const {size} = element.dataset;
  if (size === 'small') {
    book.classList.add('book_fs-small');
  } else if (size === 'big') {
    book.classList.add('book_fs-big');
  } else {
    book.classList.remove('book_fs-small');
    book.classList.remove('book_fs-big');
  }
}));
