let playground = document.getElementsByClassName('hole');
let deadCounter = document.getElementById('dead');
let lostCounter = document.getElementById('lost');

for (let i = 0; i < playground.length; i++) {
  playground[i].onclick = function() {
    if (playground[i].className === 'hole') {
      lostCounter.textContent++;
      if (lostCounter.textContent === '5') {
        alert('Вы проиграли');
        restart();
      }
    } else {
      deadCounter.textContent++;
      if (deadCounter.textContent === '10') {
        alert('Вы выиграли!')
        restart();
      }
    }
    return;
  }
}

function restart(){
  deadCounter.textContent = 0;
  lostCounter.textContent = 0;
}