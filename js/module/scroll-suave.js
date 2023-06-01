export default class ScrollANima {
  constructor(link, option) {
    this.linkInterno = document.querySelectorAll(link);

    this.behavior = option || { behavior: 'smooth', block: 'start' };
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView(this.behavior);
  }

  addEvent() {
    this.linkInterno.forEach((event) => event.addEventListener('click', this.scrollToSection));
  }

  init() {
    if (this.linkInterno.length) {
      this.addEvent();
    }
    return this;
  }
}
