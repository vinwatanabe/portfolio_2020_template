$(document).ready(function(){
	// Active slide 01
	$(".slide_01").show();
	$(".btn_01").addClass("active");

	//Slide show
	$(".btn_01").click(function(){
		hideAll();
		removeActive();

		$(".slide_01").show();
		$(".btn_01").addClass("active");
	});

	$(".btn_02").click(function(){
		hideAll();
		removeActive();

		$(".slide_02").show();
		$(".btn_02").addClass("active");
	});

	$(".btn_03").click(function(){
		hideAll();
		removeActive();

		$(".slide_03").show();
		$(".btn_03").addClass("active");
	});

	$(".btn_04").click(function(){
		hideAll();
		removeActive();

		$(".slide_04").show();
		$(".btn_04").addClass("active");
	});

	$(".btn_05").click(function(){
		hideAll();
		removeActive();

		$(".slide_05").show();
		$(".btn_05").addClass("active");
	});
});

// Hide all images
function hideAll(){
	$(".slide_01").hide();
	$(".slide_02").hide();
	$(".slide_03").hide();
	$(".slide_04").hide();
	$(".slide_05").hide();
}

// Remove all .active classes from images
function removeActive(){
	$(".btn_01").removeClass("active");
	$(".btn_02").removeClass("active");
	$(".btn_03").removeClass("active");
	$(".btn_04").removeClass("active");
	$(".btn_05").removeClass("active");
}