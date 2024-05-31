import { LitElement, html, css } from "lit";

export class ComponenteAgregarContacto extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

    /**
     * @description `nuevoContacto` es una propiedad de tipo objeto.
     */
    static get properties() {
        return {
            nuevoContacto: { type: Object },
        };
    }

    /**
     * @description Inicializa la propiedad `nuevoContacto` con valores vacíos para `phone`, `company` y `name`.
     * @type {Object}
     * @property {string} phone - Número de teléfono del nuevo contacto, inicializado como una cadena vacía.
     * @property {string} company - Nombre de la compañía del nuevo contacto, inicializado como una cadena vacía.
     * @property {string} name - Nombre del nuevo contacto, inicializado como una cadena vacía.
     */
    constructor() {
        super();
    
        this.nuevoContacto = {
            phone: '',
            company: '',
            name: ''
        }
    
    }

    /**
     * @description Maneja los cambios en los elementos input y actualiza el objeto `nuevoContacto` con los nuevos valores.
     * @param {Event} e - El objeto de evento que contiene información sobre el evento que se ha producido.
     * @event input
    */
    _handleInput(e){
        const { name, value } = e.target;
        this.nuevoContacto = {... this.nuevoContacto, [name]: value};
    }

    /**
     * @description Maneja la acción de guardar el contacto. Imprime el objeto `nuevoContacto` en la consola y luego limpia los campos del formulario.
     * @method
     */
    _handleGuardar(){
        console.log(this.nuevoContacto);
        this._limpiarCampos();
    }

    /**
     * @description Limpia los campos del formulario reiniciando el objeto `nuevoContacto` a sus valores iniciales vacíos. Fuerza la actualización del DOM.
     * @method
     */
    _limpiarCampos(){
        this.nuevoContacto = {
            phone: '',
            company: '',
            name: ''
        };
        
        this.requestUpdate();
    }



    /**
     * @description Genera y devuelve una plantilla HTML para el formulario de agregar contacto.
     * @returns {TemplateResult} Una plantilla HTML que incluye los campos para ingresar los datos del contacto y un botón para guardar.
     */
    render() {
        return html`
            <div class="agregar">
            <div class="agregar__titulo">Datos del contacto</div>
            <div class="form">
                <p class="form__titulo__input">Número de celular</p>
                <input type="text" name="phone" placeholder="55 1234 4568" class="form__input"
                @input="${this._handleInput}"
                >

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
