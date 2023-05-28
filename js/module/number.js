export default function number() {
  const numero = document.querySelectorAll('[data-number]');
  function initNumber() {
    numero.forEach((numeros) => {
      const valor = +numeros.innerText;
      const incremento = Math.floor(valor / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numeros.innerText = start;
        if (start > valor) {
          numeros.innerText = valor;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('active')) {
      observer.disconnect();
      initNumber();
    }
  }

  const observerTarget = document.querySelector('.project');
  observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });
}
