import number from './module/number.js';
import TabNav from './module/tabNav.js';
import animaScroll from './module/anima-scroll.js';
import ScrollSuave from './module/scroll-suave.js';
import MenuMobile from './module/menu-mobile.js';

number();
animaScroll();

const tabNav = new TabNav('[data-list]', '[data-teste]');
tabNav.init();

const scrollSuave = new ScrollSuave('[data-link] a[href^="#"]');
scrollSuave.init();

const menuMobile = new MenuMobile('.menu', '.menu-list');
menuMobile.init();
