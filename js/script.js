'use strict';

const inputRub = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
	//Нужно сделать запрос на сервер. встроеный объект в браузере
	//создаем новый объект
	const request = new XMLHttpRequest();
	//Метод Open - собирает настройки которые помогут сделать запрос, который принимает аргументы
	//(method(get post),url(путь к серверу),async,login,pass)
	request.open('GET', 'js1/current.json');
	//HTTP заголовки
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	//Отправка запроса
	request.send();
	//событме объекта 
	//Событие отслеживает готовность нашего запроса в данный момент
	request.addEventListener('load', () => {
		if (request.status === 200) {
			const data = JSON.parse(request.response);
			inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
		} else {
			inputUsd.value = 'Что -то пошло не так';
		}
	});
});