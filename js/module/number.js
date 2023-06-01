export default class Numbers {
  constructor(numeros, observerTarget, observerClass) {
    this.numero = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this);
  }

  static initNumber(numeros) {
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
  }

  animaNumeros() {
    this.numero.forEach((itens) => this.constructor.initNumber(itens));
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  handleObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numero.length && this.observerTarget) {
      this.handleObserver();
    }
    return this;
  }
}
