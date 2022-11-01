"use strict";

// Практика на таймеры и работу с DOM в JavaScript
/* №1⊗jsPmTmrPr
Дана кнопка. Дан абзац, текстом которого является число. По нажатию на кнопку запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1. */
/* let elems = document.querySelector('p');
let button = document.querySelector('button');
button.addEventListener('click', function(){
	setInterval(function(){
		elems.textContent = Number(elems.innerHTML) + 1
	}, 1000); 
});
 */

/* №2⊗jsPmTmrPr
Дана кнопка. Дан абзац, текстом которого является число, например, 10. По нажатию на кнопку запустите таймер, который каждую секунду будет уменьшать текст абзаца на 1. Как только значение абзаца станет равно нулю - остановите таймер. */
/* let elems = document.querySelector('p');
let button = document.querySelector('button');

button.addEventListener('click', function(){
	let timerId = setInterval(function(){
		elems.textContent = Number(elems.innerHTML) - 1;
		if (elems.innerHTML <= 0){
			clearInterval(timerId);
		}
	}, 1000);
}); */

/* №3⊗jsPmTmrPr
Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано. */
/* let elems = document.querySelector('#elem');

setInterval(function(){
	elem.value = elem.value * elems.value;
}, 1000);  */

/* №4⊗jsPmTmrPr
Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится. */

/* let elems = document.querySelector('#elem');
let paragraph = document.querySelector('p');
let timerId;
elems.addEventListener('blur', function(){
	paragraph.textContent = elems.value;
	timerId = setInterval(timer, 1000);
})

function timer(){
	paragraph.textContent = paragraph.textContent - 1;
	if (paragraph.textContent === '0'){
		clearInterval(timerId);
	}
} */

/* №5⊗jsPmTmrPr
Дан инпут, кнопка и абзац. В инпут вводится какое-то число. По нажатию на кнопку запишите введенное число в текст абзаца и запустите обратный отсчет в абзаце: пусть каждую секунду число в абзаце уменьшается на единицу, пока не дойдет до нуля. */
/* let input = document.querySelector('#input');
let elems = document.querySelector('#elem');
let button = document.querySelector('button');
let timerId;

button.addEventListener('click', function(){
	elems.textContent += input.value;
	timerId = setInterval(timer, 1000);
});

function timer(){
	elems.textContent = elems.textContent - 1;
	if (elems.textContent === '0'){
		clearInterval(timerId)
	}
} */

// №6⊗jsPmTmrPr
// Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать таймер от 1 до бесконечности, а по нажатию на вторую таймер останавливался.
/* let elems = document.querySelector('#elem');
let start = document.querySelector('#start');
let end = document.querySelector('#end');
let timerId;

start.addEventListener('click', function(){
	timerId = setInterval(function(){
		elems.textContent = Number(elems.innerHTML) + 1;
	});
});

end.addEventListener('click', pause);

function pause(){
	clearInterval(timerId);
}
 */

/* №7⊗jsPmTmrPr
Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот. */

/* let elems = document.querySelector("#elem");
window.setInterval(blink, 1000);

function blink() {
  if (elems.style.background == "red") {
    elems.style.background = "green";
  } else {
    elems.style.background = "red";
  }
}
 */

/* №8⊗jsPmTmrPr
Если выводить на экран каждую секунду текущий момент времени, то можно сделать тикающие часы. Реализуйте такие же часики, как показано ниже в образце: */

/* let elems = document.querySelector('#elem');

setInterval(function() {
	let date = new Date();
	
	let h = addZero(date.getHours());
	let m = addZero(date.getMinutes());
	let s = addZero(date.getSeconds());

	elems.innerHTML = h + ':' + m + ':' + s;
}, 1000);

function addZero(num){
	if (num <= 9){
		return '0' + num;
	} else {
		return num;
	}
} */