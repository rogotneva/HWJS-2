const modal = document.getElementById('subscribe-modal');
const closeBtn = document.querySelector('.modal__close');

document.addEventListener('DOMContentLoaded', () => {
  if (document.cookie === '') {
    modal.classList.add('modal_active');
  }
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  document.cookie = 'modalClosed=true';
  console.log(document.cookie ? document.cookie : null);
});
