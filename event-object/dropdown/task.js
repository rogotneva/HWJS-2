const menuButton = document.querySelector('.dropdown__value');
let buttonValue = menuButton.textContent;
const menuList = document.querySelector('.dropdown__list');
const itemsArr = Array.from(document.getElementsByClassName('dropdown__item'));

menuButton.addEventListener('click', clickMenu);

// itemsArr.forEach((item) => {
//   item.addEventListener('click', function() {
//     // menuButton.textContent = item.firstChild.textContent;
//     console.log(item);
//     clickMenu();
//   });
// });

for (let i = 0; i < itemsArr.length; i++) {
  itemsArr[i].addEventListener('click', function() {
    // menuButton.textContent.innerHTML = itemsArr[i].firstElementChild.textContent;
    return false;
  });
};

function clickMenu() {
  if (menuList.classList.contains('dropdown__list_active')) {
    menuList.classList.remove('dropdown__list_active');
  } else {
    menuList.classList.add('dropdown__list_active');
  }
  return false;
}
