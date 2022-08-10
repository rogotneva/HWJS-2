const menuLinks = Array.from(document.querySelectorAll('.menu__link'));

menuLinks.forEach(function(link) {
  link.onclick = function(){
    const subMenu = link.nextElementSibling;

    if (subMenu !== null) {
      if (subMenu.classList.contains('menu_active')) {
        subMenu.classList.remove('menu_active');
      } else {
        subMenu.classList.add('menu_active');
      }
      return false;
    }
  }
});
