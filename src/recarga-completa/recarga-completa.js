import { LitElement, html, css } from "lit-element";
import "../iconos/eit-icon";

class RecargaCompleta extends LitElement {
  static get properties() {
    return { recargaRealizada: { type: Boolean } }; //propiedad para validar si la recarga se hizo correctamente
  }

  constructor() {
    super();
    this.recargaRealizada = true;
  }

  static get styles() {
    return css`
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 20px;
      }
    `;
  }
  render() {
    //se utiliza un ternario para que cualdo la recarga se correcta se muestre el elemento Recarga realizada correctamente de lo contrario el elemento Recarga no realizada
    return html`
      ${this.recargaRealizada
        ? html`
            <div class="container">
              <h2>Recarga realizada correctamente</h2>
              <eit-icon icon="succefull"></eit-icon>
            </div>
          `
        : html`
            <div class="container">
              <h2>Recarga no realizada</h2>
              <eit-icon icon="cancel"></eit-icon>
            </div>
          `}
    `;
  }
}

customElements.define("recarga-completa", RecargaCompleta);
