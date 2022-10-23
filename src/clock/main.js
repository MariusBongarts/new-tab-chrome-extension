class MyClock extends HTMLElement {
  static styles = `
<style>

:host {
  width: 100%;
  display: flex;
}

#clock {
    font-size: 5rem;
    font-weight: 700;
    letter-spacing: 10px;
    color: white;
  }

@media screen and (min-width: 900px) {
  #clock {
    font-size: 6rem;
  }
  }
</style>
`;
  get template() {
    return `
    ${MyClock.styles}
    <div id="clock"></div>
    `;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.template;
    this.init();
  }

  init() {
    const setTime = () => {
      const localeTimeString = new Date().toLocaleTimeString();
      this.shadowRoot.getElementById("clock").innerHTML = localeTimeString;
    };
    setTime();
    setInterval(() => {
      setTime();
    }, 1000);
  }
}

customElements.define("my-clock", MyClock);
