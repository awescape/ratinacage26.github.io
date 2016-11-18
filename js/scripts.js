// <!-- ------------------------------------------------
// ------------------Animated Scroll -------------------
// -------------------------------------------------- -->


	  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	
	  // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
	
	  // MIT license
	
	
	  // (function() {
	  //   var lastTime = 0;
	  //   var vendors = ['ms', 'moz', 'webkit', 'o'];
	  //   for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	  //       window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
	  //       window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
	  //                                  || window[vendors[x]+'CancelRequestAnimationFrame'];
	  //   }
	
	  //   if (!window.requestAnimationFrame)
	  //       window.requestAnimationFrame = function(callback, element) {
	  //           var currTime = new Date().getTime();
	  //           var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	  //           var id = window.setTimeout(function() { callback(currTime + timeToCall); },
	  //             timeToCall);
	  //           lastTime = currTime + timeToCall;
	  //           return id;
	  //       };
	
	  //   if (!window.cancelAnimationFrame)
	  //       window.cancelAnimationFrame = function(id) {
	  //           clearTimeout(id);
	  //       };
	  // }());



//  ------------------------------------------------
// ------------------ Menu Shrink ----------------------
// -------------------------------------------------- 


$(function(){
  $(window).scroll(function() {
     if($(window).scrollTop() >= 100) {
       $('header').addClass('scrolled');
     }
    else {
      $('header').removeClass('scrolled');
    }
  });
});




// ---------------------------------------------------
//                      Click add class  Portfolio
// ----------------------------------------------------- 


// $(document).ready(function(){
//     $("branding").click(function(){
//         $("branding").addClass("display");
//     });
// });
//


$(function() {
		var selectedClass = "";
		$("li").click(function(){
		selectedClass = $(this).attr("data-rel");
    $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio figure").not("."+selectedClass).fadeOut();
    setTimeout(function() {
      $("."+selectedClass).fadeIn();
      $("#portfolio").fadeTo(500, 1);
    }, 500);
		
	});
});



// <!-- ==================VIDEO========================= -->


// $( document ).ready(function() {

//     scaleVideoContainer();

//     initBannerVideoSize('.video-container .poster img');
//     initBannerVideoSize('.video-container .filter');
//     initBannerVideoSize('.video-container video');

//     $(window).on('resize', function() {
//         scaleVideoContainer();
//         scaleBannerVideoSize('.video-container .poster img');
//         scaleBannerVideoSize('.video-container .filter');
//         scaleBannerVideoSize('.video-container video');
//     });

// });

// function scaleVideoContainer() {

//     var height = $(window).height() + 5;
//     var unitHeight = parseInt(height) + 'px';
//     $('.homepage-hero-module').css('height',unitHeight);

// }

// function initBannerVideoSize(element){

//     $(element).each(function(){
//         $(this).data('height', $(this).height());
//         $(this).data('width', $(this).width());
//     });

//     scaleBannerVideoSize(element);

// }

// function scaleBannerVideoSize(element){

//     var windowWidth = $(window).width(),
//     windowHeight = $(window).height() + 5,
//     videoWidth,
//     videoHeight;

//     console.log(windowHeight);

//     $(element).each(function(){
//         var videoAspectRatio = $(this).data('height')/$(this).data('width');

//         $(this).width(windowWidth);

//         if(windowWidth < 1000){
//             videoHeight = windowHeight;
//             videoWidth = videoHeight / videoAspectRatio;
//             $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

//             $(this).width(videoWidth).height(videoHeight);
//         }

//         $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

//     });
// }


// ======= MAP ==========

function initMap() {
  var uluru = {lat:45.5417323 , lng:73.34 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}