
import { LitElement, html, css } from "lit-element";
import "../elemento-lista/elemento-lista";
import "../app-recargas";

class ListaContactos extends LitElement {
  static get properties() {
    return {
      contactos: { type: Array },
      currentView: { type: String },
      selectedContact: { type: Object }
    };
  }

  constructor() {
    super();
    this.currentView = "listaContactos";
    this.selectedContact = null;
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
        <modificar-component 
          .contact="${this.selectedContact}" 
          @save-contact="${this.handleSaveContact}" 
          @cancel-modify="${() => this.navigateList('listaContactos')}">
        </modificar-component>
        <button @click="${() => this.navigateList("listaContactos")}">regresar</button>
      </div>
      <div class="${this.currentView === "recargarContacto" ? "" : "hidden"}">
        <h1>Componente de recarga telefónica</h1>
        <button @click="${() => this.navigateList("listaContactos")}">regresar</button>
      </div>
    `;
  }

  renderList() {
    return html`
      <p>Lista de contactos</p>
      ${this.contactos.map(
        (contacto) => html`
          <elemento-lista
            name="${contacto.name}"
            phone="${contacto.phone}"
            company="${contacto.company}"
            @navigateList="${(e) => this.handleNavigateList(e.detail.page, contacto)}"
          ></elemento-lista>
        `
      )}
      <button @click="${() => this.emitEvent("inicio")}">Regresar</button>
    `;
  }

  handleNavigateList(page, contact) {
    this.selectedContact = contact;
    this.navigateList(page);
  }
  
  navigateList(page) {
    this.currentView = page;
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

  handleSaveContact(e) {
    const updatedContact = e.detail.contact;
    this.contactos = this.contactos.map(contact => contact.phone === updatedContact.phone ? updatedContact : contact);
    this.navigateList('listaContactos');
  }
}

customElements.define("lista-contactos", ListaContactos);
