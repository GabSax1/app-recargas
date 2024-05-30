
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
      input {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
      }
    `;
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    // Actualizar el estado del contacto
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
      <h1>Modificar Contacto</h1>
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
        <input type="text" name="company" .value="${this.contact.company}" @input="${this.handleInputChange}">
      </label>
      <button @click="${this.handleSave}">Guardar</button>
      <button @click="${() => this.dispatchEvent(new CustomEvent('cancel-modify', { bubbles: true, composed: true }))}">Cancelar</button>
    `;
  }
}

customElements.define('modificar-component', ModificarComponent);
