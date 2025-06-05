(function($){

	var mediaQuery = window.matchMedia("(max-width: 1024px)")

	// =========== PLAYER FOR THUMBNAIL ===========
	if (mediaQuery.matches) {
			// =========== MOBILE ===========
			myPlayer = jQuery(".customPlayer.thumbStyle").YTPlayer({
				playOnlyIfVisible: true,
				realfullscreen: false,
				autoPlay: true,
				mute:true
			});

		} else {
			// =========== DESKTOP ===========
			myPlayer = jQuery(".customPlayer.thumbStyle").YTPlayer({
				realfullscreen: false,
				autoPlay: false,
				mute:true,
				onReady: function( player ) {
					$(".vid-thumb").hover(function(){
						$(this).find(myPlayer).YTPPlay();
					},function(){
						$(this).find(myPlayer).YTPPause();
					});
				}
			});
	}
	// =========== END PLAYER FOR THUMBNAIL ===========
	

	// =========== PLAYER FOR DETAIL PROPERTY ===========
	myPlayerDetail = jQuery(".customPlayer.detailStyle").YTPlayer({
		playOnlyIfVisible: true
	});
	// =========== END PLAYER FOR DETAIL PROPERTY ===========


})(jQuery);