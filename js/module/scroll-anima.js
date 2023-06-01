export default class ScrollSuave {
  constructor(scroll) {
    this.scrollElements = document.querySelectorAll(scroll);
    this.windowMetade = window.innerHeight * 0.8;
  }

  initScrollSuave() {
    this.scrollElements.forEach((element) => {
      const sectionTop = element.getBoundingClientRect().top;
      const isConta = (sectionTop - this.windowMetade) < 0;
      if (isConta) {
        element.classList.add('active');
      }
    });
  }

  init() {
    this.initScrollSuave();
    window.addEventListener('scroll', () => this.initScrollSuave());
  }
}
