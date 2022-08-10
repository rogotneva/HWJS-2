const rightArrow = document.querySelector('.slider__arrow_next');
const leftArrow = document.querySelector('.slider__arrow_prev');
const itemsArr = Array.from(document.getElementsByClassName('slider__item'));
let activeItem = document.querySelector('.slider__item_active');

let activeItemIndex = 0;

rightArrow.onclick = showNextItem;
leftArrow.onclick = showPreviousItem;

function showNextItem() {
  activeItemIndex++;

  if (activeItemIndex === itemsArr.length) {
    itemsArr[activeItemIndex - 1].className = 'slider__item';
    activeItemIndex = 0;
    itemsArr[activeItemIndex].className = 'slider__item slider__item_active';
  } else {
    itemsArr[activeItemIndex - 1].className = 'slider__item';
    itemsArr[activeItemIndex].className = 'slider__item slider__item_active';
  }
}

function showPreviousItem() {
  activeItemIndex--;

  if (activeItemIndex < 0) {
    itemsArr[activeItemIndex + 1].className = 'slider__item';
    activeItemIndex = itemsArr.length - 1;
    itemsArr[activeItemIndex].className = 'slider__item slider__item_active';
  } else {
    itemsArr[activeItemIndex + 1].className = 'slider__item';
    itemsArr[activeItemIndex].className = 'slider__item slider__item_active';
  }
}

//Задание 1#
const dotsArr = Array.from(document.getElementsByClassName('slider__dot'));
let lastItem = null;

dotsArr.forEach(function(dot, index) {
  dot.onclick = function() {
    activeItemIndex = index;

    if (lastItem === null) lastItem = activeItemIndex;

    itemsArr[lastItem].className = 'slider__item';
    itemsArr[activeItemIndex].className = 'slider__item slider__item_active';

    return lastItem = activeItemIndex;
  }
});
