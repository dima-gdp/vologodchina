$(document).ready(function () {

	objectFitImages();

	$('.calendar').datepicker({
		inline: true,
	})

	const interestImg = $('.interesting__image img')
	const interestGerb = $('.interesting__gerb')
	const interestLink = $('.interesting__link')

	interestLink.mouseenter(function (ev) {
		const srcImg = $(ev.target).attr('data-src')
		const srcGerb = $(ev.target).attr('data-gerb')
		if (srcImg) {
			interestImg.attr('src', srcImg)
		}
		if (srcGerb) {
			interestGerb.attr('src', srcGerb)
		}
	})



	// Табы
	// function tabs(buttonsList, wrapper, tabBlock) {
	// 	$(buttonsList).on('click', 'li:not(.active)', function () {
	// 		$(this).addClass('active').siblings().removeClass('active')
	// 			.closest(wrapper).find(tabBlock).removeClass('active').eq($(this).index()).addClass('active');
	// 	})
	// }

	// function accordion(top, bottom, topActive) {
	// 	$(top).on('click', function (ev) {
	// 		let text = $(this).next(bottom);

	// 		if ($(this).hasClass(topActive)) {
	// 			text.stop().slideUp();
	// 			$(this).removeClass(topActive)
	// 		}
	// 		else {
	// 			$(this).addClass(topActive)
	// 			text.stop().slideDown();
	// 		}
	// 	})
	// }

	// function accordionCloseOther(top, bottom, activeClass) {
	// 	$(top).on('click', function (ev) {
	// 		let text = $(this).next(bottom);

	// 		if ($(this).hasClass(activeClass)) {
	// 			$(bottom).stop().slideUp();
	// 			$(top).removeClass(activeClass);
	// 		}

	// 		else {
	// 			$(bottom).stop().slideUp();
	// 			$(top).removeClass(activeClass);
	// 			$(this).addClass(activeClass);
	// 			text.stop().slideDown();
	// 		}

	// 	})
	// }


	function mobileSlider() {
		if ($(window).innerWidth() <= 992) {
			slider_catalog = new Swiper('.top__slider', {
				slidesPerView: 3,
				spaceBetween: 40,
				pagination: {
					el: '.top__pagination',
					type: 'bullets',
					clickable: true
				},
				navigation: {
					nextEl: '.top__next',
					prevEl: '.top__prev',
				},
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 15,
					},
					421: {
						slidesPerView: 2,
						spaceBetween: 15,
					},
					520: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					769: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					850: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
				}
			});
		}

		else {
			if ($('.top__slider').hasClass('swiper-container-initialized')) {
				slider_catalog.destroy();
			}
		}
	}

	mobileSlider()

	if ($(window).innerWidth() < 577) {
		$('.interesting__grid').overlayScrollbars({
			className: 'os-theme-round-dark'
		});
	}

	// window.onresize = function () {
	// 	mobileSlider()
	// }

	const slider_partners = new Swiper('.partners__slider', {
		slidesPerView: 6,
		spaceBetween: 60,
		loop: true,
		// autoplay: {
		// 	delay: 4000,
		// },
		pagination: {
			el: '.partners__pagination',
			type: 'bullets',
			clickable: true
		},
		navigation: {
			nextEl: '.partners__next',
			prevEl: '.partners__prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			375: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			576: {
				slidesPerView: 3,
				spaceBetween: 40,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			993: {
				slidesPerView: 5,
				spaceBetween: 40,
			},
			1300: {
				slidesPerView: 6,
				spaceBetween: 60,
			},
		}
	});

	// Fancy-box

	// $('[data-src="#modal-polit"]').fancybox({
	// 	touch: 'false',
	// 	smallBtn: false,
	// 	buttons: '',
	// });

	// $('[data-src="#home-modal"]').fancybox({
	// 	touch: 'false',
	// 	smallBtn: false,
	// 	buttons: '',
	// });

	// $('[data-fancybox="gal"]').fancybox({
	// backFocus: false,
	// autoFocus: false,
	// hash: false,
	// });

	// Input-mask
	// $('input[type="tel"]').inputmask({ "mask": "+7 (999)-999-99-99" });




	// Menu-burger
	// burger.click(function () {
	// 	mobMenu.addClass('active')
	// })

	// $('.mob-menu__close').click(function () {
	// 	mobMenu.removeClass('active')
	// })

	// $(document).click(function (ev) {
	// 	if (!ev.target.closest('.header__burger') && !ev.target.closest('h1')) {
	// 		mobMenu.removeClass('active')
	// 	}
	// })

	// Яндекс карта
	// ymaps.ready(function () {
	// 	var myMap = new ymaps.Map(getMap, {
	// 		center: [52.05693880953456, 118.68705543322154],
	// 		zoom: 4
	// 	});

	// 	var myPlacemark = new ymaps.Placemark([55.54055193739615, 108.71146949572154], {
	// 		hintContent: 'г. Борисоглебск, ул. Победы, д. 66',
	// 		balloonContent: 'г. Борисоглебск, ул. Победы, д. 66'
	// 	},
	// 		{
	// 			preset: 'islands#redIcon',
	// 			iconLayout: 'default#image',
	// 			iconImageSize: [20, 28],
	// 			iconImageOffset: [-19, -52]
	// 		});

	// 	myMap.geoObjects.add(myPlacemark);
	// });


	// Alertify
	// alertify.set('notifier', 'position', 'bottom-right');
	// alertify.set('notifier', 'delay', 10);

	// document.addEventListener('wpcf7mailsent', function (event) {
	// 	alertify.success(event.detail.apiResponse.message)
	// }, false);

	// document.addEventListener('wpcf7invalid', function (event) {
	// 	alertify.warning(event.detail.apiResponse.message);
	// }, false);

	// document.addEventListener('wpcf7mailfailed', function (event) {
	// 	alertify.error(event.detail.apiResponse.message);
	// }, false);

	// $(document).on('click', '.wpcf7-submit', function (e) {
	// 	if ($('.ajax-loader').hasClass('is-active')) {
	// 		e.preventDefault();
	// 		return false;
	// 	}
	// });
});