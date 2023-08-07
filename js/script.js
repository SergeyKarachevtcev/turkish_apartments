//swiper

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

// swip button
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

//map

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
	// Создание карты.
	var myMap = new ymaps.Map("map", {
		// Координаты центра карты.
		// Порядок по умолчанию: «широта, долгота».
		// Чтобы не определять координаты центра карты вручную,
		// воспользуйтесь инструментом Определение координат.
		center: [36.548172, 32.018867],
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
		zoom: 18,
	});

	//marck
	var myPlacemark = new ymaps.Placemark(
		[36.548172, 32.018867],
		{},
		{
			iconLayout: "default#image",
			iconImageHref: "./img/map/map_marck.png",
			iconImageSize: [110, 110],
			iconImageOffset: [-55, -55],
		}
	);

	// Размещение геообъекта на карте.
	myMap.geoObjects.add(myPlacemark);
	myMap.behaviors.disable("scrollZoom");// отключил скролл карты 
}
