jQuery(function($) {
	// Site Menu
	const menu = require('./_site/menu');
	menu.init();

	// Slick Slider
	const sliders = require('./_site/sliders');
	sliders.init();
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