import { LitElement, html, css } from "lit";
import { stylesElementos } from "./elemento-lista-styles";
import "../iconos/eit-icon";
class ElementoLista extends LitElement {
  static get properties() {
    return {
      name: { type: String }, //pripiedad para mostrar el nombre
      phone: { type: String }, //pripiedad para mostrar el telefono
      company: { type: String }, //pripiedad para mostrar  la compañia
    };
  }

  constructor() {
    super();
  }

  static get styles() {
    return [stylesElementos, css`
    .container{
      width: 96%;
    }
    `]; //importación de estilos externos
  }

  render() {
    return html`
      <div class="container">
        <eit-icon icon="person"></eit-icon>
        <p class="item">${this.name}</p>
        <p class="item">${this.phone}</p>
        <p class="item">${this.company}</p>
        <boton-general
          class="link"
          @click="${() => this.emitEvent("modificarContacto")}"
        >
          Modificar
        </boton-general>
        <boton-general
          class="link"
          @click="${() => this.emitEvent("recargarContacto")}"
        >
          Recargar
        </boton-general>
      </div>
    `;
  }
  emitEvent(page) {
    /*Esta funcióm crea eñ evento que se escuchara en lista de contactos */
    this.dispatchEvent(
      new CustomEvent("navigateList", {
        detail: { page },
        composed: true,
        bubbles: true,
      })
    );
  }
}

customElements.define("elemento-lista", ElementoLista);
