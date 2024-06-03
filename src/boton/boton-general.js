import { LitElement, html, css } from "lit-element";
import { styleBotonGeneral } from "./boton-general-styles";

class BotonGeneral extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      type: { type: String },
    };
  }

  static get styles() {
    return [styleBotonGeneral, css``];
  }

  constructor() {
    label: '';
    type: '';
  }
  render() {
    return html` <button></button> `;
  }
}

customElements.define("boton-general", BotonGeneral);
