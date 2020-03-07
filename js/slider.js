$(document).ready(function(){
	// Active slide 01
	$(".slide_01").show();
	$(".btn_01").addClass("active");

	//Slide show
	sliderAnimation("01");
	sliderAnimation("02");
	sliderAnimation("03");
	sliderAnimation("04");
	sliderAnimation("05");
  
  //Image mouse over CSS links
  $(".project_image").mouseenter(function(){
    $(".project_name").addClass("hover");
  });
  
  $(".project_image").mouseleave(function(){
    $(".project_name").removeClass("hover");
  });
  
  //Time change slider
  timeChangeSlider();
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

// Slider animation
function sliderAnimation(slideNumber){
	$(".btn_" + slideNumber).click(function(){
		removeActive();
    
		slideChange(slideNumber);
	});
}

function slideChange(slideNumber){
  $.when($(".project_image").animate({width: "1px"}, 500)).then(function(){
			$.when($(".project_text").fadeOut(300)).then(function(){
				$.when(hideAll()).then(function(){
					$.when($(".slide_" + slideNumber).fadeIn(300)).then(function(){
						$.when($(".project_text").fadeIn(300)).then(function(){
							$(".project_image").animate({width: "60%"}, 500);
							$(".btn_" + slideNumber).addClass("active");
						});
					});
				});
			});
		});
}

function timeChangeSlider(){
  var count = 2;
  
  setInterval(function(){
    var slideNum = "0" + String(count);
    
    slideChange(slideNum);
    
    removeActive();
    
    if(count >= 5){
      count = 1;
    } else {
      count++;
    }
  }, 6000);
}