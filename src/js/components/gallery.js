(function($){

	$('.gallery-image').lightGallery({
		thumbnail: true,
		animateThumb: true,
		showThumbByDefault: false,
		exThumbImage: 'data-exthumbimage',
		selector: '.selector',
		download: false,
	});

	$('.detail-avatar .video-area').lightGallery({
		thumbnail: true,
		animateThumb: true,
		showThumbByDefault: false,
		exThumbImage: 'data-exthumbimage',
		selector: '.selector',
		loadYoutubeThumbnail: true,
		youtubeThumbSize: 'default',
		loadVimeoThumbnail: true,
		vimeoThumbSize: 'thumbnail_medium',
		download: false,
	});

	$('.video-listing').lightGallery({
		thumbnail: true,
		animateThumb: true,
		showThumbByDefault: false,
		exThumbImage: 'data-exthumbimage',
		selector: '.selector',
		loadYoutubeThumbnail: true,
		youtubeThumbSize: 'default',
		loadVimeoThumbnail: true,
		vimeoThumbSize: 'thumbnail_medium',
		download: false,
	});

	// $('main').lightGallery({
	// 	thumbnail: true,
	// 	animateThumb: false,
	// 	showThumbByDefault: false,
	// 	exThumbImage: 'data-exthumbimage',
	// 	selector: '.selector',
	// 	loadYoutubeThumbnail: true,
	// 	youtubeThumbSize: 'default',
	// 	loadVimeoThumbnail: true,
	// 	vimeoThumbSize: 'thumbnail_medium',
	// 	download: false,
	// 	autoplayVideoOnSlide: true,
	// });


	var swiper = new Swiper('.cover .swiper-container', {
		keyboard: {
			enabled: true,
		},
		grabCursor: false,
		slidesPerView: 1,
		autoHeight: false,
		loop: false,
		loopFillGroupWithBlank: true,
		autoplay: {
          delay: 8000,
          disableOnInteraction: false,
        },
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true,
		},
	});


	// =========== PLAYER FOR SLIDER ===========
	var myPlayerSlider;
	jQuery(function(){
		myPlayerSlider = jQuery(".customPlayer.sliderStyle").YTPlayer({
			playOnlyIfVisible: true,
			realfullscreen: false,
			autoPlay: false,
			mute:true,

			onReady: function( player ) {
				$(".vid-thumb").hover(function(){
					$(this).find(myPlayerSlider).YTPPlay();
				},function(){
					$(this).find(myPlayerSlider).YTPPause();
				});

			}
		});
	});
	var swiper = new Swiper('.thumbnails.slider .swiper-container', {
		keyboard: {
			enabled: true,
		},
		grabCursor: true,
		slidesPerView: 1,
		spaceBetween: 30,
		autoHeight: false,
		loop: false,
		loopFillGroupWithBlank: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: false,
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1000: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
		},
		on: {
			init: function () {
				// console.log( 'init :', this.realIndex );
			},
			realIndexChange: function () {
				// console.log( 'realIndexChange :', this.realIndex )
			},
			slideChange: function () {
				// console.log( 'slideChange :', this.realIndex );
			},
			slideChangeTransitionStart: function () {
				// console.log( 'slideChangeTransitionStart :', this.realIndex );
			},
			slideChangeTransitionEnd: function () {
				var elementFind = $('.thumbnail-slider .swiper-slide');
				elementFind.each(function(){
					if ($(this).hasClass('swiper-slide-active')) {
						$(this).find(myPlayerSlider).YTPPlay();
					} else {
						$(this).find(myPlayerSlider).YTPPause();
					}
				});
			},
		}
	});
	// =========== END PLAYER FOR SLIDER ===========



	var swiper = new Swiper('.projects .swiper-container', {
		keyboard: {
			enabled: true,
		},
		grabCursor: true,
		slidesPerView: 1,
		spaceBetween: 30,
		autoHeight: false,
		loop: false,
		loopFillGroupWithBlank: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: false,
		},
		breakpoints: {
			600: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
		},
	});

	var swiper = new Swiper('.gallery-image .swiper-container', {
		keyboard: {
			enabled: true,
		},
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 1,
		autoHeight: true,
		effect: 'coverflow',
		loop: false,
		loopFillGroupWithBlank: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true,
		},
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 150,
			modifier: 4,
			slideShadows : false,
		},
		breakpoints: {
			1200: {
				slidesPerView: 2,
			},
			1000: {
				slidesPerView: 2,
			},
		},
	});

})(jQuery);