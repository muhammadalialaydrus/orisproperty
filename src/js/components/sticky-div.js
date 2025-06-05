function stickyClass() {
	$(window).scroll(function(event){
		var scroll = $(window).scrollTop();
		
		$('.share-contact').toggleClass('hiding',
			scroll >= $('footer').offset().top - 54
		);
	});
}

var mediaQuery = window.matchMedia("(max-width: 1000px)")

function stickyVideo(x) {
	var sidebarVideo = new StickySidebar('.video-portrait', {
		topSpacing: 0,
		bottomSpacing: 0,
		containerSelector: '.detail-with-video',
		innerWrapperSelector: '.video-portrait .video-fixed'
	});

	if (mediaQuery.matches) {
			sidebarVideo.destroy();
			// console.log('destroy');
		} else {
			sidebarVideo.updateSticky();
			// console.log('update');
	}
}

function stickyAgent() {
	var sidebarAgent = new StickySidebar('.agent-contact', {
		topSpacing: 80,
		bottomSpacing: 0,
		containerSelector: '.agent-detail-content',
		innerWrapperSelector: '.agent-contact .agent-contact-wrapper'
	});
}


$(function() {
	if ($('.share-contact').length > 0) {
		stickyClass();
	}

	if ($('.detail-with-video').length > 0) {
		// if (window.matchMedia('(max-width: 767px)').matches) {
		// 		sidebarVideo.destroy();
		// 		console.log('destroy');
		// 	} else {
		// 		sidebarVideo.updateSticky();
		// 		console.log('update');
		// }
		stickyVideo(mediaQuery)
		mediaQuery.addListener(stickyVideo)

		// stickyVideo();
	}

	if ($('.agent-detail-listing .agent-contact').length > 0) {
		stickyAgent();
	}
})
