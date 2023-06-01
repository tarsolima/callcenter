import Numbers from './module/number.js';
import TabNav from './module/tabNav.js';
import ScrollAnima from './module/scroll-anima.js';
import ScrollSuave from './module/scroll-suave.js';
import MenuMobile from './module/menu-mobile.js';

const number = new Numbers('[data-number]', '.project', 'active');
number.init();

const tabNav = new TabNav('[data-list]', '[data-teste]');
tabNav.init();

const scrollANima = new ScrollAnima('[data-scroll]');
scrollANima.init();

const scrollSuave = new ScrollSuave('[data-link] a[href^="#"]');
scrollSuave.init();

const menuMobile = new MenuMobile('.menu', '.menu-list');
menuMobile.init();
