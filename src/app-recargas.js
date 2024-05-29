import { LitElement, html, css } from 'lit';
import '../src/nuevo-contacto';
import '../src/lista-contactos';
import '../src/eit-icon';

class AppRecargas extends LitElement {
  static properties = {
    currentPage: { type: String },
    contactos: { type: Array },
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
      {
        name: "Gabriel",
        phone: "5581562066",
        company: "Telcel",
      },
      {
        name: "Fernando",
        phone: "5581565768",
        company: "Telcel",
      },
      {
        name: "Andrea",
        phone: "5581563099",
        company: "Telcel",
      },
    ];
  }

  render() {
    return html`
    

     <div class="${this.currentPage === 'inicio' ? ' ' : 'hidden'}">
      <nav>
        <!-- componente titulo -->
        <div>
          <h2>Para</h2>
          <h3>Selecciona un destino para la recarga movil</h3>
        </div>
        <h3><eit-icon icon="add" @click="${() => this.navigate('nuevoContacto')}"></eit-icon>Nuevo</h3>
        <h3><eit-icon icon="contacts" @click="${() => this.navigate('listaContactos')}"></eit-icon>Contactos guardados</h3>
     </div>

      <div class="${this.currentPage === "nuevoContacto" ? " " : "hidden"}">
        <!-- componente titulo -->
        <nuevo-contacto></nuevo-contacto>
        <button @click="${() => this.navigate("inicio")}">Regresar</button>
      </div>

      <div class="${this.currentPage === "listaContactos" ? " " : "hidden"}">
        <!-- componente titulo -->
        <lista-contactos .contactos=${this.contactos}></lista-contactos>
        <button @click="${() => this.navigate("inicio")}">Regresar</button>
      </div>
    `;
  }
  navigate(page) {
    this.currentPage = page;
  }
}

customElements.define("app-recargas", AppRecargas);
