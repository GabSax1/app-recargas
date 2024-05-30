
import { LitElement, html, css } from "lit-element";
import "../elemento-lista/elemento-lista";
import "../app-recargas";
import "../modificar-contacto/modificar-component";

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

  handleSaveContact(event) {
    const updatedContact = event.detail.contact;
    this.contactos = this.contactos.map(contact =>
      contact.phone === updatedContact.phone ? updatedContact : contact
    );
    this.navigateList('listaContactos');
  }

  render() {
    return html`
      <div class="${this.currentView === "listaContactos" ? "" : "hidden"}">
        <componente-titulo titulo="Contactos guardados"></componente-titulo>
        ${this.renderList()}
      </div>

      <div class="${this.currentView === "modificarContacto" ? "" : "hidden"}">
        <componente-titulo titulo="Modificar Contacto"></componente-titulo>
        <modificar-component
          .contact="${this.selectedContact}"
          @save-contact="${this.handleSaveContact}"
          @cancel-modify="${() => this.navigateList('listaContactos')}">
        </modificar-component>
      </div>
      <div class="${this.currentView === "recargarContacto" ? "" : "hidden"}">
        <componente-titulo titulo="Recarga telefónica"></componente-titulo>
        <h1>Componente de recarga telefonica</h1>
        <button @click="${() => this.navigateList("listaContactos")}">regresar</button>
      </div>
    `;
  }

  renderList() {
    return html`
      <p>Lista de contactos</p>
      ${this.contactos.map(contacto => html`
        <elemento-lista
          name="${contacto.name}"
          phone="${contacto.phone}"
          company="${contacto.company}"
          @navigateList="${(e) => this.navigateList(e.detail.page, contacto)}"
        ></elemento-lista>
      `)}
      <button @click="${() => this.emitEvent('inicio')}">Regresar</button>
    `;
  }

  navigateList(page, contact = null) {
    this.currentView = page;
    if (page === 'modificarContacto') {
      this.selectedContact = contact;
    }
  }

  emitEvent(page) {
    this.dispatchEvent(new CustomEvent("navigate", {
      detail: { page },
      composed: true,
      bubbles: true,
    }));
  }
}

customElements.define("lista-contactos", ListaContactos);
