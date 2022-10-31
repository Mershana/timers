'use strict'

// Практика на таймеры и работу с DOM в JavaScript

/* Пусть у нас дан инпут:

<input id="elem" value="1">
Давайте сделаем таймер, который каждую секунду увеличивать значение атрибута value нашего инпута на единицу:

let elem = document.querySelector('#elem');

setInterval(function() {
	elem.value = Number(elem.value) + 1;
}, 1000);
 */

/* №1⊗jsPmTmrDm
Объясните, зачем в приведенном выше коде используется функция Number. Что будет, если не написать эту функцию в данном коде? */
//если не использовать функцию Number, то числа будут складываться как строки


/* №2⊗jsPmTmrDm
Пусть в инпуте в атрибуте value изначально записано число 10. Запустите таймер, который каждую секунду будет уменьшать это число на единицу. */
/* let elem = document.querySelector('#elem');

setInterval(function(){
	elem.value = Number(elem.value) - 1;
}, 1000); */

/* №3⊗jsPmTmrDm
Модифицируйте предыдущую задачу так, чтобы, как только содержимое инпута станет равно нулю, таймер прекратил свою работу. */

let elem = document.querySelector('#elem');



let timerId = setInterval(function(){
	elem.value = Number(elem.value) - 1;
	if (elem.value <= 0){
		clearInterval(timerId);
	}
}, 1000);
