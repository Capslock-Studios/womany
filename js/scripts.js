/*
Author       : My_life_design.
Template Name: Alice - Responsive App Landing Page
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/

		/*START MENU JS*/		
		function windowScroll() {
			const navbar = document.getElementById("navbar");
			if (
				document.body.scrollTop >= 50 ||
				document.documentElement.scrollTop >= 50
			) {
				navbar.classList.add("nav-sticky");
			} else {
				navbar.classList.remove("nav-sticky");
			}
		}

		$(document).on('click','.navbar-collapse',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
		});	
		
		window.addEventListener('scroll', (ev) => {
			ev.preventDefault();
			windowScroll();
		})	  	
		/*END MENU JS*/

		/*START VIDEO JS*/
		$('.video-play').magnificPopup({
            type: 'iframe'
        });
		/*END VIDEO JS*/		

		/* START TESTIMONIAL JS */
		$("#testimonial-slider").owlCarousel({
			items:1,
			itemsDesktop:[1000,1],
			itemsDesktopSmall:[980,1],
			itemsTablet:[768,1],
			itemsMobile:[650,1],
			pagination:true,
			navigation:false,
			slideSpeed:1000,
			autoPlay:false
		});
		/* END TESTIMONIAL JS */
		
		/*START PARTNER LOGO*/
		$('.partner').owlCarousel({
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  items : 6,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
		});
		/*END PARTNER LOGO*/		
		

	}); 		
	
	/* START PARALLAX JS */
	(function () {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 
		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}

	}());
	/* END PARALLAX JS  */	
	
	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/	
				
})(jQuery);


  

