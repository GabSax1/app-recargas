import { LitElement, html, css } from "lit";

export class ComponenteAgregarContacto extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  static get properties() {
    return {
      nuevoContacto: { type: Object },
    };
  }

  constructor() {
    super();
    this.nuevoContacto = {
      phone: "",
      company: "",
      name: "",
    };
  }

  _handleInput(e) {
    const { name, value } = e.target;
    this.nuevoContacto = { ...this.nuevoContacto, [name]: value };
  }

  _handleGuardar() {
    this.dispatchEvent(
      new CustomEvent("guardar-contacto", {
        detail: this.nuevoContacto,
        bubbles: true,
        composed: true,
      })
    );
    this._limpiarCampos();
  }

  _limpiarCampos() {
    this.nuevoContacto = {
      phone: "",
      company: "",
      name: "",
    };
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="agregar">
        <div class="agregar__titulo">Datos del contacto</div>
        <div class="form">
          <p class="form__titulo__input">Número de celular</p>
          <input
            type="text"
            name="phone"
            placeholder="55 1234 4568"
            class="form__input"
            .value="${this.nuevoContacto.phone}"
            @input="${this._handleInput}"
          />

          <p class="form__titulo__input">Compañia</p>
          <select
            name="company"
            id="type"
            class="form__input"
            .value="${this.nuevoContacto.company}"
            @input="${this._handleInput}"
          >
            <option value="telcel">telcel</option>
            <option value="movistar">movistar</option>
            <option value="unefon">unefon</option>
            <option value="bait">bait</option>
            <option value="at&t">at&t</option>
          </select>

          <p class="form__titulo__input">Nombre del destinatario</p>
          <input
            type="text"
            name="name"
            class="form__input"
            .value="${this.nuevoContacto.name}"
            @input="${this._handleInput}"
          />
        </div>
        <div class="agregar__button">
          <button @click="${this._handleGuardar}">Guardar</button>
        </div>
      </div>
    `;
  }
}

customElements.define("componente-agregar-contacto", ComponenteAgregarContacto);
