export default function menuSuave() {
  const scroll = document.querySelectorAll('[data-scroll]');
  const windowMetade = window.innerHeight * 0.8;

  function initScrollSuave() {
    scroll.forEach((event) => {
      const sectionTop = event.getBoundingClientRect().top;
      const conta = (sectionTop - windowMetade) < 0;
      if (conta) {
        event.classList.add('active');
      }
    });
  }

  initScrollSuave();

  window.addEventListener('scroll', initScrollSuave);
}
