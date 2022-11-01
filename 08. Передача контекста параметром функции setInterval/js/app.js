'use strict'

// Передача контекста параметром функции setInterval
/* №1⊗jsPmTmrPCBP
Пусть дан такой код:

<input type="button" id="elem" value="10">
let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	setInterval(function() {
		this.value--;
	}, 1000);
});
Автор кода хотел, чтобы по нажатию на кнопку, значение этой кнопки каждую секунду уменьшалось на 1. Однако, по нажатию на кнопку вообще ничего не происходит. Исправьте ошибку автора кода, используя изученный в данном уроке способ. */

let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	setInterval(function(self) {
		self.value--;
	}, 1000, this);
});
