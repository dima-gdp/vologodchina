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

	const search = $('.search--animated')
	const searchBtnOpen = $('.header__btn-search')
	const searchBtnClose = $('.search__close')
	const searchBtnClear = $('.search__clear')
	const searchBtnInput = $('.search__input input')



	$(searchBtnOpen).on('click', function () {
		search.stop().slideDown()
	})
	$(searchBtnClose).on('click', function () {
		search.stop().slideUp()
	})
	$(searchBtnClear).on('click', function () {
		searchBtnInput.val('')
		searchBtnClear.removeClass('search__clear--visible')
	})

	$(searchBtnInput).on('input', function () {
		if (searchBtnInput.val() !== '') {
			searchBtnClear.addClass('search__clear--visible')
		} else {
			searchBtnClear.removeClass('search__clear--visible')
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



	const menu = document.querySelector(".menu-wrapper");
	const menuText = document.querySelector(".menu-text");
	const menuTextContent = document.querySelector(".menu-text__text");
	const menuItems = Array.from(document.querySelectorAll(".menu-item"));
	const burger = $('.header__burger')

	burger.on('click', function () {
		menu.classList.add('active')
	})


	let menuCurrent = "main",
		currentTarget;

	OverlayScrollbars(document.querySelectorAll(".menu-item"), {});

	function returnMenuItem(items, compare) {
		return items.find(function (item) {
			return item.dataset.menu === compare;
		});
	}

	function destroyMenu() {
		menu.classList.remove("active");
		menuCurrent = "main";

		menuItems.forEach(function (item) {
			item.classList.remove("active");
		});

		returnMenuItem(menuItems, menuCurrent).classList.add("active");
		menuText.classList.remove("active");
	}

	document.addEventListener("click", function (event) {
		const { target } = event;

		if (target.matches(".menu-link_clickable")) {
			event.preventDefault();

			menuCurrent = target.dataset.menu;

			currentTarget = returnMenuItem(menuItems, menuCurrent);

			menuItems.forEach(function (item) {
				item.classList.remove("active");
			});

			currentTarget.classList.add("active");

			if (!menuText.classList.contains("active")) {
				menuText.classList.add("active");
			}

			menuTextContent.textContent = currentTarget.dataset.text;
		}

		//Пойти назад в меню

		if (target.closest(".menu-text.active")) {
			currentTarget.classList.remove("active");
			let parent = currentTarget.dataset.parent;

			currentTarget = returnMenuItem(menuItems, parent);
			let parentText = currentTarget.dataset.text;

			currentTarget.classList.add("active");
			menuCurrent = parent;

			if (parent === "main") {
				menuText.classList.remove("active");
			} else {
				menuText.dataset.menu = parent;
				menuTextContent.textContent = parentText;
			}
		}

		if (
			target.matches(".menu-close") ||
			(!target.closest(".menu-wrapper") && menu.classList.contains("active"))
		) {
			event.preventDefault();
			destroyMenu();
		}

		if (target.closest(".header__burger") || target.closest(".catalog-menu__mobile")) {
			menu.classList.add("active");
		}
	});





	if ($(window).innerWidth() >= 1201) {
		const hiddenItem = $('.hidden-item');
		const image = $('.hidden-item img');
		const height = hiddenItem.innerHeight() / 2;
		const width = hiddenItem.innerWidth() / 2;

		hiddenItem.mousemove(function (event) {
			var x = (event.offsetX - width) / 10;
			var y = (event.offsetY - height) / 10;

			image.css('transform', `translate(${x}px, ${y}px)`);
		});

		hiddenItem.mouseleave(function () {
			image.css('transform', 'translate(0px, 0px)');
		})
	}

	const rightSliders = document.querySelectorAll('.right-slider__slider')
	const imageSliders = document.querySelectorAll('.slider-image__slider')

	if (rightSliders.length) {
		rightSliders.forEach(function (el) {
			const slider_partners = new Swiper(el, {
				slidesPerView: 1,
				spaceBetween: 20,
				effect: 'fade',
				navigation: {
					nextEl: el.closest('.right-slider').querySelector('.next'),
					prevEl: el.closest('.right-slider').querySelector('.prev'),
				},
			});
		})
	}

	if (imageSliders.length) {
		imageSliders.forEach(function (el) {
			const image__slider = new Swiper(el, {
				slidesPerView: 3,
				spaceBetween: 60,
				pagination: {
					el: el.closest('.slider-image').querySelector('.slider-image__pagination'),
					type: 'bullets',
					clickable: true
				},
				navigation: {
					nextEl: el.closest('.slider-image').querySelector('.next'),
					prevEl: el.closest('.slider-image').querySelector('.prev'),
				},
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					421: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					769: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					1200: {
						slidesPerView: 3,
						spaceBetween: 60,
					},
				}
			});
		})
	}



	const select = $('.placeses-select').select2({
		width: '100%',
		placeholder: "Введите, что вас интересует"
	});

	$('.result-placeses__clear').click(function () {
		select.val(null).trigger('change');
	})

});



