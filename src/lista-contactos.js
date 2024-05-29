import { LitElement, html, css } from "lit-element";
import "../src/elemento-lista/elemento-lista";

class listaContactos extends LitElement {
  static get properties() {
    return {
      contactos: { type: Array },
      currentView: { type: String },
    };
  }

  constructor() {
    super();
    this.currentView = "listaContactos";
  }

  static get styles() {
    return css`
      :host {
      }
      .hidden {
        display: none;
      }
    `;
  }

  render() {
    return html`
      <div class="${this.currentView === "listaContactos" ? "" : "hidden"}">
        ${this.renderList()}
      
      </div>

      <div class="${this.currentView === "modificarContacto" ? "" : "hidden"}">
        <h1>Componente modificar contacto</h1>
      </div>
    `;
  }
  renderList() {
    return html`
      ${this.contactos.map(
        (contacto) => html`
          <elemento-lista
            name="${contacto.name}"
            phone="${contacto.phone}"
            company="${contacto.company}"
            @navigate="${(e) => this.navigate(e.detail.page)}"
          ></elemento-lista>
        `
      )}
    `;
  }
  navigate(page) {
    this.currentView = page;
  }
}

customElements.define("lista-contactos", listaContactos);
