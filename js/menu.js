$(document).ready(function(){
	$(".modal_menu").hide();

	$("#menu").click(function(){
		$(".modal_menu").fadeIn("fast");
	});

	$(".close").click(function(){
		$(".modal_menu").fadeOut("fast");
	});
});