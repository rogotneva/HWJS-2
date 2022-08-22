const interestsList = Array.from(document.querySelectorAll('.interests_active'));
const mainInterests = interestsList.map((int) => int.closest('li').firstElementChild.firstElementChild);

mainInterests.forEach((int) => int.addEventListener('change', (e) => {
  let subInt = e.target.closest('li.interest').lastElementChild.querySelectorAll('input');
  subInt = Array.from(subInt);
  subInt.forEach((input) => input.checked === true ? input.checked = false : input.checked = true);
}));
