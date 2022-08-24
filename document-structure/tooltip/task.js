const linksArr = document.querySelectorAll('.has-tooltip');

linksArr.forEach((link) => {
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.textContent = link.title;

  link.addEventListener('click', (e) => {
    let position = link.getBoundingClientRect();
    tooltip.setAttribute('style', `left: ${position.left}px; top: ${position.top + 20}px;`);
    link.insertAdjacentElement('afterEnd', tooltip);

    if (document.querySelector('.tooltip_active')) {
      document.querySelector('.tooltip_active').classList.remove('tooltip_active');
    }

    tooltip.classList.toggle('tooltip_active');

    e.preventDefault();
  });
});
