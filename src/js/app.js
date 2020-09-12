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