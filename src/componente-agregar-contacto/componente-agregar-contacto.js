import { LitElement, html, css } from "lit";

export class ComponenteAgregarContacto extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      .agregar{
        padding-left: 40px;
        padding-top: 25px;
    }
    .agregar__titulo{
        font-family: "Inter", sans-serif;
        color: var(-color--titulos);
        text-transform: uppercase;
        font-size: 38px;
    }
    .form{
        
    }
    .form__titulo__input{
        font-size: 25px;
        font-weight: normal;
        margin-bottom: 0;
    }
    .form__input{
        width: 650px;
        height: 49px;
        font-size: 25px;
        color: #828282;
        margin-top: 6px;
        margin-bottom:19px;
    }
    input{
        background-color: #F1F1F1;
        box-sizing: border-box;
        padding: 5px;
        padding-left: 16px;
        border: 1px solid #E0E0E0;
        border-radius: 8px;
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
            company: 'telcel',
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
            <option class="uppercase" value="telcel">Telcel</option>
            <option value="movistar">Movistar</option>
            <option value="unefon">Unefon</option>
            <option value="bait">Bait</option>
            <option value="at&t">AT&T</option>
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
