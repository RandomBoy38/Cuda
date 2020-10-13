"use strict"

var boxes = $(".boxes"),
	nav	  = $(".nav-bg");

boxes.on("click", function() {
	nav.toggle();
	$(".box1").toggleClass("change1");
	$(".box2").toggleClass("change2");
	$(".box3").toggleClass("change3");

})