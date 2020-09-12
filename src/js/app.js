import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import popup from './modules/popup';
import loader from './modules/loader';
import bulletScroll from './modules/bullet-scroll';
import activateOnScroll from './modules/activate-on-scroll';
import toggleMenu from './modules/toggle-menu';
import initSliders from './modules/init-sliders';

popup();
loader();
bulletScroll();
activateOnScroll();
toggleMenu();
initSliders();

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("js-header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("is-sticky");
	} else {
		header.classList.remove("is-sticky");
	}
}