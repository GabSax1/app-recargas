

import { LitElement, html, css } from 'lit-element';

class RecargaComponent extends LitElement {
  static get properties() {
    return {
      montos: { type: Array },
      selectedMonto: { type: Number }
    };
  }

  constructor() {
    super();
    this.montos = [20, 30, 50, 100, 150, 200, 300, 500, 750, 1000];
    this.selectedMonto = null;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
        text-align: center;
      }
      .montos-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
      }
      .monto-row {
        display: flex;
        gap: 8px;
      }
      .monto {
        width: 80px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 8px;
        padding: 16px;
        border: 2px solid var(--main-header, #F87474); /* Utiliza la variable de color del título */
        border-radius: 8px;
        background-color: var(--main-header, #F87474); /* Utiliza la variable de color del título */
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.3s ease;
      }
      .monto.selected {
        background-color: var(--main-header, #F87474); /* Utiliza la variable de color del título */
        font-weight: bold;
        transform: scale(1.1);
      }
      button {
        margin-top: 16px;
        padding: 8px 16px;
        font-size: 16px;
        cursor: pointer;
        background-color: var(--main-header, #F87474); /* Utiliza la variable de color del título */
        color: #fff;
        border: none;
        border-radius: 8px;
        transition: background-color 0.3s ease;
      }
      button:disabled {
        background-color: #ffcc80;
        cursor: not-allowed;
      }
    `;
  }

  selectMonto(monto) {
    this.selectedMonto = monto;
  }

  confirmRecarga() {
    // Emitir evento personalizado con el monto seleccionado
    this.dispatchEvent(new CustomEvent('recarga-confirmada', {
      detail: { monto: this.selectedMonto },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <componente-titulo titulo="Recarga telefónica"></componente-titulo>
      <div class="montos-container">
        <div class="monto-row">
          ${this.montos.slice(0, 3).map(monto => html`
            <div
              class="monto ${this.selectedMonto === monto ? 'selected' : ''}"
              @click="${() => this.selectMonto(monto)}"
            >
              $${monto}
            </div>
          `)}
        </div>
        <div class="monto-row">
          ${this.montos.slice(3, 7).map(monto => html`
            <div
              class="monto ${this.selectedMonto === monto ? 'selected' : ''}"
              @click="${() => this.selectMonto(monto)}"
            >
              $${monto}
            </div>
          `)}
        </div>
        <div class="monto-row">
          ${this.montos.slice(7).map(monto => html`
            <div
              class="monto ${this.selectedMonto === monto ? 'selected' : ''}"
              @click="${() => this.selectMonto(monto)}"
            >
              $${monto}
            </div>
          `)}
        </div>
      </div>
      <button @click="${this.confirmRecarga}" ?disabled="${this.selectedMonto === null}">
        Recargar
      </button>
    `;
  }
}

customElements.define('recarga-component', RecargaComponent);
