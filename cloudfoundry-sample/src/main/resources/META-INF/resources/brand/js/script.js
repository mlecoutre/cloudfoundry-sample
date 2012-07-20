$(document).ready(function(){

	/****** Check browser to load CSS3 or JS *********/
	var br=new Array(4);
	br=getBrowser();
	var moz = ((br[0]).indexOf('firefox') != -1);
	var ie = ((br[0]).indexOf('msie') != -1);
	var mozLt4 = moz && br[1].substr(0,3) < 4;
	var ieLt10 = ie && br[1].substr(0,3) < 10;
	
	// SI Firefox < 4 ou IE < 10
//	if (mozLt4 || ieLt10 ) {
//		
//		$('#slideshow').remove();
//	} else { 
//		
//		$('#slider').remove();
//	}
	
	// Si IE < 10
	if(ieLt10) {
	  $(".news_corner").addClass("news_corner_old");
	  $(".bandeau_login").addClass("bandeau_login_old");
	  $(".header2").append("<div class='header2_corner_top'></div><div class='header2_corner_bottom'></div>");
	  $(".pwd_lost").prepend("<div class='pwd_lost_corner'><div class='pwd_lost_corner_top'></div><div class='pwd_lost_corner_bottom'></div>");
	  $(".pwd_lost").addClass("pwd_lost_old");
	  $(".pwd_lost_content").addClass("pwd_lost_content_old");
	}
	/*************************************************/

	/****************************************************************/
		
	/********************* Slideshow News *************************/
	$("#slider").easySlider({
		auto: true,
		continuous: true,
		speed:5000
	});
	/**************************************************************/
	/*
	$(".login input").keypress(function(event) {
	  if ( event.which == 13 ) {
	     event.preventDefault();
	     $(".access input").click();
	   }
	});
	*/	
	
	/****** Change arrow color on hover link 'not referenced'
	$('.buy a').hover(function(){
		$(this).children("input").attr('src','resources/brand/images/arrow_right_hover.png');
	},function(){
		$(this).children("input").attr('src','resources/brand/images/arrow_right.png');
	});
	******/
	/**************************************************************/
	
	/****** Change arrow color on hover link 'lost password' 
	$('#lostPassword').hover(function(){
		$(this).children("input").attr('src','resources/brand/images/arrow_down_hover.png');
	},function(){
		$(this).children("input").attr('src','resources/brand/images/arrow_down.png');
	});
	******/
	/**************************************************************/
	
	
	/**************************************************************/

	var diff = document.documentElement.clientHeight - $("body").height();
	//if (ie) diff -= 12;
	diff -=25;
	$(".footer").css("bottom",'-'+diff+'px');
});