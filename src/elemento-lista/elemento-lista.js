import { LitElement, html, css } from "lit";
import { stylesElementos } from "./elemento-lista-styles";

class ElementoLista extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      phone: { type: String },
      company: { type: String },
    };
  }

  constructor() {
    super();
  }

  static get styles() {
    return [stylesElementos, css``];
  }

  render() {
    return html`
      <div class="container">
        <p class="item">${this.name}</p>
        <p class="item">${this.phone}</p>
        <p class="item">${this.company}</p>
        <button
          class="link"
          @click="${() => this.emitEvent("modificarContacto")}"
        >
          Modificar
        </button>
        <button
          class="link"
          @click="${() => this.emitEvent("recargarContacto")}"
        >
          Recargar
        </button>
      </div>
    `;
  }
  emitEvent(page) {
    this.dispatchEvent(
      new CustomEvent("navigate", {
        detail: { page },
        composed: true,
        bubbles: true,
      })
    );
  }
}

customElements.define("elemento-lista", ElementoLista);
