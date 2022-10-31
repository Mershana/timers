'use strict'

// Кнопки для запуска и остановки таймера на JavaScript
/* №1⊗jsPmTmrSB

Пусть дана переменная, в которой изначально хранится число 100. Даны также две кнопки. По нажатию на первую кнопку запустите таймер, который каждую секунду будет уменьшать значение переменной на 1 и выводить новое значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.
По нажатию на вторую кнопку остановите таймер. Также остановите таймер, если вторая кнопка не была нажата, но значение переменной достигло нуля. */

/* let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

let timerId;

start.addEventListener('click', function func(){
	let i = 100;

	timerId = setInterval(function(){
		console.log(--i);
		if (i <= 0){
			clearInterval(timerId);
		}
	}, 1000);

	this.removeEventListener('click', func);
});

stop.addEventListener('click', function(){
	let i = 100;
		clearInterval(timerId);
		if (i === 0){
			clearInterval(timerId);
		}
}); */


/* №2⊗jsPmTmrSB
Некоторый программист написал код, который по нажатию на кнопку запускает таймер, выводящий в консоль текущий момент времени:

<input type="submit" id="start" value="start">
<input type="submit" id="stop"  value="stop">
let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

start.addEventListener('click', function() {
	let timerId = setInterval(function() {
		let date = new Date;
		console.log(date.getMinutes() + ' ' + date.getSeconds());
	}, 1000);
});

stop.addEventListener('click', function() {
	clearInterval(timerId);
});
После запуска кода, однако, оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода.
 */


/* let timerId; //не было глобльной переменной

let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

start.addEventListener('click', function() {
	timerId = setInterval(function() {
		let date = new Date;
		console.log(date.getMinutes() + ' ' + date.getSeconds());
	}, 1000);
});

stop.addEventListener('click', function() {
	clearInterval(timerId);
}); */


/* №3⊗jsPmTmrSB
Еще один программист также написал код для решения предыдущей задачи:
<input type="submit" id="start" value="start">
<input type="submit" id="stop"  value="stop">
let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

let timerId;

start.addEventListener('click', function() {
	let timerId = setInterval(function() {
		let date = new Date;
		console.log(date.getMinutes() + ' ' + date.getSeconds());
	}, 1000);
});

stop.addEventListener('click', function() {
	clearInterval(timerId);
});
После запуска кода, однако, опять оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода. */

/* let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

let timerId; //достаточно объявить

start.addEventListener('click', function() {
	timerId = setInterval(function() { //зачем то объявляем внешнюю переменную 
		let date = new Date;
		console.log(date.getMinutes() + ' ' + date.getSeconds());
	}, 1000);
});

stop.addEventListener('click', function() {
	clearInterval(timerId);
}); */

/* №4⊗jsPmTmrSB

Еще один программист также написал код для решения предыдущей задачи:

<input type="submit" id="start" value="start">
<input type="submit" id="stop"  value="stop">
let start = document.querySelector('start');
let stop  = document.querySelector('stop');

let timerId;

start.addEventListener('click', function() {
	setInterval(function() {
		let date = new Date;
		console.log(date.getMinutes() + ' ' + date.getSeconds());
	}, 1000);
});

stop.addEventListener('click', function() {
	clearInterval(timerId);
});
После запуска кода, однако, опять оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода. */
/* let start = document.querySelector('#start'); // не обратились к айди
let stop  = document.querySelector('#stop');

let timerId;

start.addEventListener('click', function() {
	timerId = setInterval(function() { //не присвоили функцию к переменной
		let date = new Date;
		console.log(date.getMinutes() + ' ' + date.getSeconds());
	}, 1000);
});

stop.addEventListener('click', function() {
	clearInterval(timerId);
}); */


/*  №5⊗jsPmTmrSB

Еще один программист также написал код для решения предыдущей задачи:

<input type="submit" id="start" value="start">
<input type="submit" id="stop"  value="stop">
let start = document.querySelector('start');
let stop  = document.querySelector('stop');

let timerId;

start.addEventListener('click', function() {
	let timerId = setInterval(function() {
		let date = new Date;
		console.log(date.getMinutes() + ' ' + date.getSeconds());
	}, 1000);
});

stop.addEventListener('click', function() {
	clearInterval();
});
После запуска кода, однако, опять оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода. 
 */

/* let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

let timerId;

start.addEventListener('click', function() {
	timerId = setInterval(function() {
		let date = new Date;
		console.log(date.getMinutes() + ' ' + date.getSeconds());
	}, 1000);
});

stop.addEventListener('click', function() {
	clearInterval(timerId);
}); */

/* №6⊗jsPmTmrSB
Приведенный мною в теоретической части код не учитывает то, что на кнопку старт можно сделать несколько нажатий. Для исправления этой проблемы можно по нажатию на кнопку старт отвязывать событие от этой кнопки, а по нажатию на кнопку стоп - привязывать обратно. Исправьте проблему. */

 let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

let timerId;

start.addEventListener('click', function func() {
	timerId = setInterval(function() {
		let date = new Date;
		console.log(date.getMinutes() + ' ' + date.getSeconds());
	}, 1000);
	this.removeEventListener('click', func);
});

stop.addEventListener('click', function() {
	clearInterval(timerId);
	this.appendChild('#start');
}); 


//вернуться!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!