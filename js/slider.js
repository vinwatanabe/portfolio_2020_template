$(document).ready(function(){
	// Active slide 01
	$(".slide_01").show();
	$(".btn_01").addClass("active");

	//Slide show
	$(".btn_01").click(function(){
		removeActive();

		$.when($(".project_image").animate({width: "1px"}, 500)).then(function(){
			$.when($(".project_text").fadeOut(300)).then(function(){
				$.when(hideAll()).then(function(){
					$.when($(".slide_01").fadeIn(300)).then(function(){
						$.when($(".project_text").fadeIn(300)).then(function(){
							$(".project_image").animate({width: "60%"}, 500);
							$(".btn_01").addClass("active");
						});
					});
				});
			});
		});
	});

	$(".btn_02").click(function(){
		removeActive();

		$.when($(".project_image").animate({width: "1px"}, 500)).then(function(){
			$.when($(".project_text").fadeOut(300)).then(function(){
				$.when(hideAll()).then(function(){
					$.when($(".slide_02").fadeIn(300)).then(function(){
						$.when($(".project_text").fadeIn(300)).then(function(){
							$(".project_image").animate({width: "60%"}, 500);
							$(".btn_02").addClass("active");
						});
					});
				});
			});
		});
	});


	$(".btn_03").click(function(){
		removeActive();

		$.when($(".project_image").animate({width: "1px"}, 500)).then(function(){
			$.when($(".project_text").fadeOut(300)).then(function(){
				$.when(hideAll()).then(function(){
					$.when($(".slide_03").fadeIn(300)).then(function(){
						$.when($(".project_text").fadeIn(300)).then(function(){
							$(".project_image").animate({width: "60%"}, 500);
							$(".btn_03").addClass("active");
						});
					});
				});
			});
		});
	});

	$(".btn_04").click(function(){
		removeActive();

		$.when($(".project_image").animate({width: "1px"}, 500)).then(function(){
			$.when($(".project_text").fadeOut(300)).then(function(){
				$.when(hideAll()).then(function(){
					$.when($(".slide_04").fadeIn(300)).then(function(){
						$.when($(".project_text").fadeIn(300)).then(function(){
							$(".project_image").animate({width: "60%"}, 500);
							$(".btn_04").addClass("active");
						});
					});
				});
			});
		})
	});

	$(".btn_05").click(function(){
		removeActive();

		$.when($(".project_image").animate({width: "1px"}, 500)).then(function(){
			$.when($(".project_text").fadeOut(300)).then(function(){
				$.when(hideAll()).then(function(){
					$.when($(".slide_05").fadeIn(300)).then(function(){
						$.when($(".project_text").fadeIn(300)).then(function(){
							$(".project_image").animate({width: "60%"}, 500);
							$(".btn_05").addClass("active");
						});
					});
				});
			});
		})
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