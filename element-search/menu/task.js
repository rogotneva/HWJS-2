//Задание 1
// const menuLinks = Array.from(document.querySelectorAll('.menu__link'));
// menuLinks.forEach(function(link) {
//   link.onclick = function(){
//     const subMenu = link.nextElementSibling;
//
//     if (subMenu !== null) {
//       subMenu.classList.toggle('menu_active');
//       return false;
//     }
//   }
// });

//Задание 1#
const menuLinks = Array.from(document.querySelectorAll('.menu__link'));
const hasSubMenu = menuLinks.filter(link => link.nextElementSibling !== null);
// let lastClick; //При клике на одно подменю, закрывается уже открытое, как и должно быть.
    // Но не закрывается то же подменю при повторном клике.

hasSubMenu.forEach(function(link) {
  link.onclick = function() {
    let lastClick; //Открывается и закрывается при клике на одну кнопку с подменю;
    if (lastClick !== undefined) {
      lastClick.nextElementSibling.classList.toggle('menu_active');
    }
    link.nextElementSibling.classList.toggle('menu_active');
    lastClick = link;
    return false;
  }
})
