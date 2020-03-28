$(document).ready(function(){
  var currentSlide = 1;
  var timeChange = 6000;
  
  // Defines the initial slide
  initialSlide();
  
  //Slide show
  sliderAction("01");
  sliderAction("02");
  sliderAction("03");
  sliderAction("04");
  sliderAction("05");
  
  //Image mouse over CSS links
  $(".project_image").mouseenter(function(){
    $(".project_name").addClass("hover");
  });
  
  $(".project_image").mouseleave(function(){
    $(".project_name").removeClass("hover");
  });
  
  //Change slide on scroll
  changeScroll();
  
  // Timer change the slider
  var timer = setInterval(timerFunc, timeChange);
  
  // Set initial slide
  function initialSlide(){
    var slideNumber = "0" + String(currentSlide);
    
    $(".slide_" + slideNumber).show();
    $(".btn_" + slideNumber).addClass("active");
  }
  
  // button click action
  function sliderAction(slideNumber){
    $(".btn_" + slideNumber).click(function(){
      removeActive();
      
      clearInterval(timer);
      
      slideAnimation(slideNumber);
      
      currentSlide = Number(slideNumber);
      
      timer = setInterval(timerFunc, timeChange);
    });
  }
  
  // remove all active btn classes
  function removeActive(){
    $(".btn_01").removeClass("active");
    $(".btn_02").removeClass("active");
    $(".btn_03").removeClass("active");
    $(".btn_04").removeClass("active");
    $(".btn_05").removeClass("active");
  } 
  
  // Hide all images
  function hideAll(){
    $(".slide_01").hide();
    $(".slide_02").hide();
    $(".slide_03").hide();
    $(".slide_04").hide();
    $(".slide_05").hide();
  }
  
  // Change slide animation
 /* function slideAnimation(slideNumber){
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
  }*/
  
  function slideAnimation(slideNumber){
    $.when($(".project_image").animate({width: "1px"}, 500)).then(function(){
      $.when($(".project_text").fadeOut(300)).then(function(){
        $.when(hideAll()).then(function(){
          $.when($(".slide_" + slideNumber).fadeIn(300)).then(function(){
            $.when($(".project_text").fadeIn(300)).then(function(){
              if($(window).width() > 425){
                $(".project_image").animate({width: "60%"}, 500);
              } else {
                $(".project_image").animate({width: "100%"}, 500);
              }
              $(".btn_" + slideNumber).addClass("active");
            });
          });
        });
      });
    });
  }
  
  //Logic for the time change slider
  function timerFunc(){
    if(currentSlide == 5){
      removeActive();
      slideAnimation("01");
      currentSlide = 1;
    } else {
      removeActive();
      currentSlide++;
      var slideNumber = "0" + String(currentSlide);
      slideAnimation(slideNumber);
    }
  }
  
  function scrollProcessor(event){
    if(event.deltaY < 0){
        if(currentSlide == 5){
          removeActive();
          clearInterval(timer);
          slideAnimation("01");
          currentSlide = 1;
          timer = setInterval(timerFunc, timeChange)
        } else {
          removeActive();
          clearInterval(timer);
          currentSlide++;
          slideNumber = "0" + String(currentSlide);
          slideAnimation(slideNumber);
          timer = setInterval(timerFunc, timeChange);
        }
      } else if (event.deltaY > 0){
        if(currentSlide == 1){
          removeActive();
          clearInterval(timer);
          slideAnimation("05");
          currentSlide = 5;
          timer = setInterval(timerFunc, timeChange)
        } else {
          removeActive();
          clearInterval(timer);
          currentSlide--;
          slideNumber = "0" + String(currentSlide);
          slideAnimation(slideNumber);
          timer = setInterval(timerFunc, timeChange);
        }
      }
  }
  
  // Change slide on scroll with jquery-mousewheel
  function changeScroll(){
    $(window).on('mousewheel', function(event) {
      scrollProcessor(event);

      $(window).off('mousewheel');
      setTimeout(changeScroll ,2000);
    });
  }
});