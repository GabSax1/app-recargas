import { LitElement, html, css } from 'lit-element';

class ModificarComponent extends LitElement {
  static get properties() {
    return {
      contact: { type: Object }
    };
  }

  constructor() {
    super();
    this.contact = { name: '', phone: '', company: '' };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
        border: 1px solid #ccc;
        border-radius: 8px;
        max-width: 400px;
        margin: 0 auto;
      }
      .form-group {
        margin-bottom: 16px;
      }
      label {
        display: block;
        margin-bottom: 8px;
        font-weight: bold;
      }
      input, select {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
      }
      button {
        margin-right: 8px;
      }
      boton-general{
      cursor: pointer;
      background-color: transparent;
      padding: 10px 20px;
      font-size: 16px;
      box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
      border-radius: 3px;
      margin-right: 15px;
      }
    `;
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.contact = { ...this.contact, [name]: value };
  }

  handleSave() {
    this.dispatchEvent(new CustomEvent('save-contact', {
      detail: { contact: this.contact },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <h1>Contacto</h1>
      <label>
        Nombre:
        <input type="text" name="name" .value="${this.contact.name}" @input="${this.handleInputChange}">
      </label>
      <label>
        Teléfono:
        <input type="text" name="phone" .value="${this.contact.phone}" @input="${this.handleInputChange}">
      </label>
      <label>
        Compañía:
        <select name="company" .value="${this.contact.company}" @change="${this.handleInputChange}">
          <option value="">Seleccione una compañía</option>
          <option value="Movistar">Movistar</option>
          <option value="Telcel">Telcel</option>
          <option value="AT&T">AT&T</option>
          <option value="Unefon">Unefon</option>
          <option value="Virgin Mobile">Virgin Mobile</option>
        </select>
      </label>
      <boton-general @click="${this.handleSave}">Guardar</boton-general>
      <boton-general @click="${() => this.dispatchEvent(new CustomEvent('cancel-modify', { bubbles: true, composed: true }))}">Cancelar</boton-general>
    `;
  }
}

customElements.define('modificar-component', ModificarComponent);
