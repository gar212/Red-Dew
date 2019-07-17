$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    margin:10,
	nav:false,
	dots: false,
	lazyLoad: true,
	responsive:{
        0:{
            items:1,
			autoplay: true,
			autoplayTimeout:5000,
			autoplayHoverPause:true,
			dots: true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3
        }
    }
  });
});