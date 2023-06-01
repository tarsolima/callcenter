import outsideClick from './outside.js';

export default class MenuMobile {
  constructor(menu, menuList, events) {
    this.menu = document.querySelector(menu);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active';

    if (this.userEvent === undefined) this.userEvent = ['touchstart', 'click'];
    else this.userEvent = events;

    this.initMenu = this.initMenu.bind(this);
  }

  initMenu(event) {
    event.preventDefault();
    this.menu.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);
    outsideClick(this.menuList, this.userEvent, () => {
      this.menu.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addEvent() {
    this.userEvent.forEach((event) => this.menu.addEventListener(event, this.initMenu));
  }

  init() {
    if (this.menu && this.menuList) {
      this.addEvent();
    }
    return this;
  }
}
