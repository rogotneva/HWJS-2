//Задание 1

// let clickerElem = document.getElementById('clicker__counter');
// let clickerCounter = clickerElem.textContent;
// let cookieImg = document.getElementById('cookie');
//
// cookieImg.onclick = function() {
//   clickerCounter++;
//   if (clickerCounter % 2 === 0) {
//     cookieImg.width = '200';
//   } else {
//     cookieImg.width = '250';
//   }
//   return (clickerElem.textContent = clickerCounter);
// };

//Задание 1#
let clickerElem = document.getElementById('clicker__counter');
let cookieImg = document.getElementById('cookie');
let clickerForce = document.getElementById('clicker__force');
let clickerCounter = 0;
let isFirstClick = true;
let lastClickTime;
let timeDiff;
let clickForce;

cookieImg.addEventListener('click', doClick);

function doClick () {
  clickerCounter++;
  getForce();
  changeWidth();
  lastClickTime = Date.now();
  return clickerElem.textContent = clickerCounter;
};

function changeWidth(){
  if (clickerCounter % 2 === 0) {
    cookieImg.width = '200';
  } else {
    cookieImg.width = '250';
  }
};

function getForce() {
  if (isFirstClick) {
    lastClickTime = Date.now();
    isFirstClick = false;
    clickForce = 1;
  } else  {
    timeDiff = Date.now() - lastClickTime;
    clickForce = (1 / (timeDiff / 1000)).toFixed(2);
  }
  return clickerForce.textContent = clickForce;
};
