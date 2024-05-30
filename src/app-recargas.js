

import { LitElement, html, css } from 'lit';
import '../src/nuevo-contacto';
import '../src/lista-contactos/lista-contactos';
import '../src/iconos/eit-icon';
import '../src/modificar-contacto/modificar-component'; 

class AppRecargas extends LitElement {
  static properties = {
    currentPage: { type: String },
    contactos: { type: Array },
    selectedContactPhone: { type: String } // Añadida propiedad para manejar el contacto seleccionado
  };

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
    }
    .hidden {
      display: none;
    }
    div {
      text-align: start;
    }
  `;

  constructor() {
    super();
    this.currentPage = "inicio";
    this.contactos = [
      { name: "Gabriel", phone: "5581562066", company: "Telcel" },
      { name: "Fernando", phone: "5581565768", company: "Telcel" },
      { name: "Andrea", phone: "5581563099", company: "Telcel" },
    ];
    this.selectedContactPhone = null; // Inicialización de la propiedad
  }

  render() {
    return html`
      <!-- Vista principal "inicio" -->
      <div class="${this.currentPage === 'inicio' ? ' ' : 'hidden'}">
        <nav>
          <div>
            <h2>Para</h2>
            <h3>Selecciona un destino para la recarga móvil</h3>
          </div>
          <h3>
            <eit-icon icon="add" @click="${() => this.navigate('nuevoContacto')}"></eit-icon>Nuevo
          </h3>
          <h3>
            <eit-icon icon="contacts" @click="${() => this.navigate('listaContactos')}"></eit-icon>Contactos guardados
          </h3>
        </nav>
      </div>

      <!-- Vista "nuevoContacto" -->
      <div class="${this.currentPage === "nuevoContacto" ? " " : "hidden"}">
        <nuevo-contacto></nuevo-contacto>
        <button @click="${() => this.navigate("inicio")}">Regresar</button>
      </div>

      <!-- Vista "listaContactos" -->
      <div class="${this.currentPage === "listaContactos" ? " " : "hidden"}">
        <lista-contactos 
          .contactos="${this.contactos}" 
          @navigate="${(e) => this.navigate(e.detail.page, e.detail.contactPhone)}">
        </lista-contactos>
      </div>

      <!-- Vista "modificarContacto" -->
      <div class="${this.currentPage === "modificarContacto" ? " " : "hidden"}">
        <modificar-component 
          .contact="${this.contactos.find(contact => contact.phone === this.selectedContactPhone)}" 
          @save-contact="${this.updateContact}" 
          @cancel-modify="${() => this.navigate('listaContactos')}">
        </modificar-component>
      </div>
    `;
  }

  navigate(page, contactPhone = null) {
    this.currentPage = page;
    this.selectedContactPhone = contactPhone; // Actualizar el contacto seleccionado
  }

  updateContact(e) {
    const updatedContact = e.detail.contact;
    this.contactos = this.contactos.map(contact => contact.phone === updatedContact.phone ? updatedContact : contact);
    this.navigate('listaContactos');
  }
}

customElements.define("app-recargas", AppRecargas);
