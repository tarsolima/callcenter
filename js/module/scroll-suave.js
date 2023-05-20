export default function scrollInterno() {
  const linkInterno = document.querySelectorAll('[data-link] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linkInterno.forEach((event) => {
    event.addEventListener('click', scrollToSection);
  });
}
