'use strict'

// Таймеры и потеря контекста в JavaScript
/* №1⊗jsPmTmrTCL
Пусть дан такой код:
<input type="button" id="elem" value="1">
let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	setInterval(function() {
		this.value = Number(elem.value) + 1;
	}, 1000);
});
Автор кода хотел, чтобы по нажатию на кнопку, значение этой кнопки каждую секунду увеличивалось на 1. Однако, по нажатию на кнопку вообще ничего не происходит. Исправьте ошибку автора кода. Напишите текст, в котором вы дадите объяснение автору кода, почему возникла его ошибка. */
/* let elem = document.querySelector('#elem');


elem.addEventListener('click', function() {
	let self = this;
	setInterval(function() {
		self.value = Number(elem.value) + 1;
	}, 1000);
}); */

// Другие способы решить проблему

/* №2⊗jsPmTmrTCL */
/* Исправьте проблему предыдущей задачи через стрелочную функцию. */
/* let elem = document.querySelector('#elem');
elem.addEventListener('click', function(){
	let self = this;
	setInterval(() => (self.value = Number(elem.value) + 1), 1000);
}); */

// Решение проблемы через замыкание

