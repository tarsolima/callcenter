import outsideClick from './outside.js';

export default function menuMobile() {
  const menu = document.querySelector('.menu');
  const menuList = document.querySelector('.menu-list');
  const userEvent = ['touchstart', 'click'];

  function initMenu(event) {
    event.preventDefault();
    menu.classList.add('active');
    menuList.classList.add('active');
    outsideClick(menuList, userEvent, () => {
      menu.classList.remove('active');
      menuList.classList.remove('active');
    });
  }

  userEvent.forEach((event) => {
    menu.addEventListener(event, initMenu);
  });
}
