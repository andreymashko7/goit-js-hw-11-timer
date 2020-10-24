import '../src/styles.css';
import colors from './js/colors';

const refs ={
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body')
}

let timerId = null;//  переменная для значения интервала

refs.startBtn.addEventListener('click',btnStartClick );
refs.stopBtn.addEventListener('click', btnStopClick);

//ф-я по кнопке старт , запускает интервал .

function btnStartClick() { 
   timerId = setInterval(() => {
       bodyColorChange();
   }, 1000);
    
    refs.startBtn.disabled = true;
}

// ф-я останавливает интервал, делает кнопку старт не активной

function btnStopClick() {
    clearInterval(timerId);
    refs.startBtn.disabled = false;
    
}
// меняет цвета на боди
function bodyColorChange() {
 refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
}
// генерируем случайный цвет для боди

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};





