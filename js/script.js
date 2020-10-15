"use strict"

// BUTTON CLOSE

var boxes = $(".boxes"),
	nav	  = $(".nav-bg");

boxes.on("click", function() {
	nav.toggle();
	$(".box1").toggleClass("change1");
	$(".box2").toggleClass("change2");
	$(".box3").toggleClass("change3");

});

// RESPONSIVE MENU

$(window).on("resize", function() {
	if ( $(window).width() > 1007) {
	$(".nav-bg").hide();
	$(".box1").removeClass("change1");
	$(".box2").removeClass("change2");
	$(".box3").removeClass("change3");
}
});

// LIGHTBOX

var gallery = $(".gallery"),
	boxes   = $(".boxes"),
	lightBoxClose = $(".light-box-close"),
	divko   = $("<div>", { class: "divko"});
	divko.appendTo('body').hide();

	// SHOW LIGHTBOX + CLOSE BTTN (HIDE MAIN RESPONSIVE MENU)

	$(".gallery a").on("click", function(event){
		var href = $(this).attr("href"),
			image= $("<img>", { src: href});

		divko.html(image).add(lightBoxClose).show();
		arrow.hide();


		event.preventDefault();
	});

	// HIDE LIGHTBOX ON CLICK
	
	lightBoxClose.on("click", function(){
		divko.hide();
		lightBoxClose.hide();
	})

	// HIDE LIGHTBOX ON KEYDOWN
	
	$(document).on("keydown", function(event) {
		if (event.which === 27) {
		divko.add(lightBoxClose).hide();}
	})

	// SECTION SCROLL MAIN MENU
	
var link = $("nav a");

	link.on("click", function(event) {
		var id = this.hash;
		$("html, body").animate({scrollTop: $(this.hash).offset().top}, 1000, function() {
			window.location.hash= id;
		})
		event.preventDefault();
	})

	// SECTION SCROLL NAV-BG MENU
	
var linkResize = $(".nav-bg a");

	linkResize.on("click", function() {
		var id = this.hash;
		$("html, body").animate({scrollTop: $(this.hash).offset().top}, 1000, function() {
			window.location.hash= id;
		})
	})

	// ARROW
	
var arrow = $("<div>", { html: '<i class="far fa-arrow-alt-circle-up"></i>',
						 class: "arrow"});

	arrow.appendTo('body').hide();

	arrow.on("click", function() {
		$("html, body").animate({scrollTop: 0}, 1000);
	})

	$(window).on("scroll", function() {

	if ($(window).scrollTop() >= 400) {
		arrow.fadeIn(500);
	}

	else {arrow.fadeOut(500)}


	})



