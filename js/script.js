jQuery(function(){
	// opacity change and parallaxing
	if ($( window ).width() >= 992){
		$(document).scroll(function () {
			var windowHeight = $( window ).height();
			var scrollTop = $(window).scrollTop();
			var opacity = 1 - Math.pow(scrollTop/windowHeight, 0.5);
			$("header:not(headermenu)").css("opacity", opacity);
			var movebg = $(window).scrollTop()*0.5;
			$("header").css('background-positionY', (movebg) + 'px');
		});
	} else {
		// $("header").css("background", "url('img/1.jpg') 20% center / cover no-repeat fixed");
		$("header").css("bakckground-image", "url('img/1.jpg')");
		$("header").css("background-position", "20%");
		$("header").css("background-size", "cover");
	}

	// hover over main items	
	$(".fi, .bfi").hover(function() {
		if ($( window ).width() >= 992){
			$(".overlay", this).fadeIn();
		};
	}, function(){
		if ($( window ).width() >= 992){
			$(".overlay", this).fadeOut();
		};
	});
	$(".fi, .bfi").on("click", function() {
		if ($( window ).width() >= 992){
			location.href = $(this).attr("href");
		}else {
			if ($(".overlay", this).css("display") != "none"){
				location.href = $(this).attr("href");
			};
			$(".fi, .bfi").each(function(){
				$(".overlay", this).fadeOut();
			});
			$(".overlay", this).fadeIn();
		};
	});
	// hover over link section images
	$(".leftlinksection").hover(function() {
		$(".leftlinksection").animate({"margin-left": "10%"}, "slow")	
	}, function(){
		$(".leftlinksection").animate({"margin-left": "0"}, "slow")
	});
	$(".rightlinksection").hover(function() {
		$(".rightlinksection").animate({"margin-right": "10%"}, "slow")			
	}, function(){
		$(".rightlinksection").animate({"margin-right": "0"}, "slow")
	});
});
//openmenu
function openmenu() {
	if ($(".mainnav").css("left") < "0px"){
		$( ".mainnav" ).animate({ "left": "0%" }, "medium");
	}
	else{
		$( ".mainnav" ).animate({ "left": "-70%" }, "fast");
	}
}
//openlink
function openlink(link){
	location.href = link;
}