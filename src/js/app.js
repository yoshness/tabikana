import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import popup from './modules/popup';
import loader from './modules/loader';
import bulletScroll from './modules/bullet-scroll';
import activateOnScroll from './modules/activate-on-scroll';
import toggleMenu from './modules/toggle-menu';
import initSliders from './modules/init-sliders';
import stickyHeader from './modules/sticky-header';
import scrollToElement from './modules/scroll-to-element';
import truncateText from './modules/truncate-text';

popup();
loader();
bulletScroll();
activateOnScroll();
toggleMenu();
initSliders();
stickyHeader();
scrollToElement();
truncateText();

function iOS() {
	return [
		'iPad Simulator',
		'iPhone Simulator',
		'iPod Simulator',
		'iPad',
		'iPhone',
		'iPod'
	].includes(navigator.platform)
	// iPad on iOS 13 detection
	|| (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
}

if (iOS() === true) {
    document.documentElement.className += ' ' + 'is-iphone';
}