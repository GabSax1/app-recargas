
import { LitElement, html, css } from "lit-element";
import "../elemento-lista/elemento-lista";
import "../app-recargas";
import "../modificar-contacto/modificar-component";
import "../recarga-component/recarga-component";  

class ListaContactos extends LitElement {
  static get properties() {
    return {
      contactos: { type: Array }, //propiedad para almacenar los datos del array principal
      currentView: { type: String },  // Propiedad para manejar la vista actual
      selectedContact: { type: Object }  // Propiedad para manejar el contacto seleccionado
    };
  }

  constructor() {
    super();
    this.currentView = "listaContactos";  // Inicializar la vista actual como 'listaContactos'
    this.selectedContact = null;  // Inicializar el contacto seleccionado como null
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .hidden {
        display: none;  // Clase para ocultar elementos
      }
    `;
  }

  handleSaveContact(event) {
    const updatedContact = event.detail.contact;
    this.contactos = this.contactos.map(contact =>
      contact.phone === updatedContact.phone ? updatedContact : contact
    );
    this.navigateList('listaContactos');  // Volver a la vista de lista de contactos
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
        <recarga-component .contact="${this.selectedContact}"></recarga-component>  <!-- Pasar el contacto seleccionado -->
        <button @click="${() => this.navigateList("listaContactos")}">Regresar</button>
      </div>
    `;
  }

  renderList() {
    /*Generación de la lista con el .map y usando el componente elemento-lista */
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
    this.currentView = page;  // Cambiar la vista actual
    if (page === 'modificarContacto' || page === 'recargarContacto') {
      this.selectedContact = contact;  // Establecer el contacto seleccionado
    }
  }

  emitEvent(page) {
    //Esta funcion crea un nuevo evento para poder hacer la navegación desde el component padre
    this.dispatchEvent(new CustomEvent("navigate", {
      detail: { page },
      composed: true,
      bubbles: true,
    }));
  }
}

customElements.define("lista-contactos", ListaContactos); 
