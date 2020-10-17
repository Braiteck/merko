$(() => {
	// Основной слайдер на главной
	$('.main_slider .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: true,
		dots: true,
		loop: true,
		smartSpeed: 750,
		autoplay: true,
		autoplayTimeout: 5000,
		navText: [
			'<svg class="icon"><use xlink:href="images/sprite.svg#ic_slider_arrow"></use></svg>',
			'<svg class="icon"><use xlink:href="images/sprite.svg#ic_slider_arrow"></use></svg>'
		],
		onTranslate: (event) => {
			$(event.target).trigger('stop.owl.autoplay')
		},
		onTranslated: (event) => {
			$(event.target).trigger('play.owl.autoplay', [4250, 0])
		}
	})


	// Проекты
	$('.projects .slider').owlCarousel({
		nav: true,
		dots: false,
		loop: true,
		smartSpeed: 500,
		mouseDrag: false,
		navText: [
			'<svg class="icon"><use xlink:href="images/sprite.svg#ic_slider_arrow"></use></svg>',
			'<svg class="icon"><use xlink:href="images/sprite.svg#ic_slider_arrow"></use></svg>'
		],
		responsive: {
			0: {
				items: 1,
				margin: 20
			},
			768: {
				items: 1,
				margin: 20
			},
			1024: {
				items: 2,
				margin: 20
			},
			1280: {
				items: 2,
				margin: 44
			}
		}
	})


	// Отправка форм
	$('body').on('submit', '.form.custom_submit', function (e) {
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src: '#success_modal',
			type: 'inline',
			touch: false,
			afterShow: function (instance, current) {
				setTimeout(function () {
					$.fancybox.close()
				}, 3000)
			}
		})
	})
})