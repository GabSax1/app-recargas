import { LitElement, html, css } from "lit-element";
import "../src/nuevo-contacto";
import "../src/lista-contactos/lista-contactos";
import "../src/iconos/eit-icon";
import "../src/boton/boton-general";

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
    .añadir {
      padding: 0.8rem;
      border-radius: 0.5rem;
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
<<<<<<< HEAD
    

     <div class="${this.currentPage === "inicio" ? " " : "hidden"}">
      <nav>
=======
      <div class="${this.currentPage === "inicio" ? " " : "hidden"}">
        <nav></nav>
>>>>>>> 58eb3f988e05d2993d947d9838d0b252b436c019
        <!-- componente titulo -->
        <div>
          <h2>Para</h2>
          <h3>Selecciona un destino para la recarga movil</h3>
        </div>
<<<<<<< HEAD
        <h3><eit-icon icon="add" @click="${() =>
          this.navigate("nuevoContacto")}"></eit-icon>Nuevo</h3>
        <h3><eit-icon icon="contacts" @click="${() =>
          this.navigate("listaContactos")}"></eit-icon>Contactos guardados</h3>
     </div>
=======
        <h3>
          <boton-general
            class="añadir"
            @click="${() => this.navigate("nuevoContacto")}"
            ><eit-icon icon="add"></eit-icon>Nuevo</boton-general
          >
        </h3>
        <h3>
          <boton-general
            class="añadir"
            @click="${() => this.navigate("listaContactos")}"
            ><eit-icon icon="contacts"></eit-icon>Contactos guardados
          </boton-general>
        </h3>
      </div>
>>>>>>> 58eb3f988e05d2993d947d9838d0b252b436c019

      <div class="${this.currentPage === "nuevoContacto" ? " " : "hidden"}">
        <!-- componente titulo -->
        <nuevo-contacto></nuevo-contacto>
        <boton-general @click="${() => this.navigate("inicio")}"
          >Regresar</boton-general
        >
      </div>

      <div class="${this.currentPage === "listaContactos" ? " " : "hidden"}">
        <!-- componente titulo -->
<<<<<<< HEAD
        <lista-contactos .contactos=${this.contactos} @navigate="${(e) => this.navigate(e.detail.page)}"></lista-contactos>
        
=======
        <lista-contactos .contactos=${this.contactos}></lista-contactos>
        <boton-general @click="${() => this.navigate("inicio")}"
          >Regresar</boton-general
        >
>>>>>>> 58eb3f988e05d2993d947d9838d0b252b436c019
      </div>
    `;
  }
  navigate(page) {
    this.currentPage = page;
  }
}

customElements.define("app-recargas", AppRecargas);
