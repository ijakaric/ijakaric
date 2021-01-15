jQuery(function($) {
	// Site Menu
	const menu = require('./_site/menu');
	menu.init();

	// Slick Slider
	const sliders = require('./_site/sliders');
	sliders.init();

	// Slick Slider
	const smoothScroll = require('./_site/smoothScroll');
	smoothScroll.init();
});

  // Not a ton of code, but hard to
  const nav = document.querySelector('.site-header');
  let topOfNav = nav.offsetTop;

  function fixNav() {
	if (window.scrollY >= topOfNav) {
	//   document.body.style.paddingTop = nav.offsetHeight + 'px';
	  document.body.classList.add('fixed-nav');
	} else {
	  document.body.classList.remove('fixed-nav');
	//   document.body.style.paddingTop = 0;
	}
  }

  window.addEventListener('scroll', fixNav);


// 
  const swup = new Swup(); // only this line when included with script tag


  $(document).ready(function() {
	$('.has-animation').each(function(index) {
	  $(this).delay($(this).data('delay')).queue(function(){
		$(this).addClass('animate-in');
	  });
	});
  });
  



  
  new WOW().init();

  $(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});