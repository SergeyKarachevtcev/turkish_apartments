//swiper

/* Создание и настройка Swiper слайдера */

// swip button
var mySwiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	//добавляем кнопки
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	on: {
		init: function () {
			this.update(); // обновляем параметры слайдера при инициализации
		},
	},
});

/* Обновление параметров Swiper слайдера при изменении размера экрана */
function updateSwiper() {
	if (window.innerWidth <= 767) {
		mySwiper.params.slidesPerView = 1;
	} else if (window.innerWidth <= 1200) {
		mySwiper.params.slidesPerView = 2;
	} else {
		mySwiper.params.slidesPerView = 3;
	}
	mySwiper.update(); // обновляем параметры слайдера
}

/* Вызов функции обновления при загрузке страницы и изменении размера окна */
window.addEventListener("load", updateSwiper);
window.addEventListener("resize", updateSwiper);

//top obj swiper



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
	myMap.behaviors.disable("scrollZoom"); // отключил скролл карты
}
