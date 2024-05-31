import { LitElement, html, css } from "lit-element";

import "../src/lista-contactos/lista-contactos";
import "../src/iconos/eit-icon";
import "../src/boton/boton-general";
import "../src/componente-titulo/componente-titulo";
import "../src/componente-agregar-contacto/componente-agregar-contacto";
import "../src/recarga-component/recarga-component";
import "../src/recarga-completa/recarga-completa"




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

  // Nuevo: Añadir un event listener después de que el componente se haya actualizado por primera vez
  firstUpdated() {
    this.addEventListener('recarga-confirmada', this.handleRecargaConfirmada);
  }

  // Nuevo: Manejar el evento personalizado 'recarga-confirmada' y cambiar la vista a 'recargaCompleta'
  handleRecargaConfirmada(e) {
    const { monto } = e.detail;
    console.log(`Recarga confirmada: ${monto}`);
    this.currentPage = 'recargaCompleta';
  }

  render() {
    return html`
      <div class="${this.currentPage === "inicio" ? " " : "hidden"}">
        <nav>
          <componente-titulo titulo="Recargas y paquetes"></componente-titulo>
          <div>
            <h2>Para</h2>
            <h3>Selecciona un destino para la recarga móvil</h3>
          </div>
          <h3>
            <eit-icon icon="add" @click="${() => this.navigate("nuevoContacto")}"></eit-icon>
            Nuevo
          </h3>
          <h3>
            <eit-icon icon="contacts" @click="${() => this.navigate("listaContactos")}"></eit-icon>
            Contactos guardados
          </h3>
        </nav>
      </div>

      <div class="${this.currentPage === "nuevoContacto" ? " " : "hidden"}">
        <componente-titulo titulo="Nuevo Celular"></componente-titulo>
        <componente-agregar-contacto @guardar-contacto="${this.guardarContacto}"></componente-agregar-contacto>
        <boton-general @click="${() => this.navigate("inicio")}">Regresar</boton-general>
      </div>

      <div class="${this.currentPage === "listaContactos" ? " " : "hidden"}">
       <!--  evento error -->
         <lista-contactos .contactos=${this.contactos} @navigate="${(e) => this.navigate(e.detail.page)}"></lista-contactos> 
        <!-- <lista-contactos .contactos=${this.contactos} @click="${() => this.navigate("listaContactos")}"></lista-contactos> -->
      </div>

      
      <!-- Bug de regreso -->
      <div class="${this.currentPage === 'recargaCompleta' ? '' : 'hidden'}">
        <recarga-completa></recarga-completa>
        <button @click="${() => this.navigate('inicio')}">Volver a inicio</button>
      </div>
     <!--  bug de regreso -->
    `;
  }

  navigate(page) {
    this.currentPage = page;
  }

  guardarContacto(e) {
    //Función para que se guarde la información del contacto y se actualice en la vista contactos guardados
    const nuevoContacto = e.detail;
    this.contactos = [...this.contactos, nuevoContacto];
    this.navigate("listaContactos");
  }
}

customElements.define("app-recargas", AppRecargas);


