import { LitElement, html, css } from 'lit';

export class ComponenteTitulo extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                --main-test: #59CE8F;
                --main-background: #FEFBF6;
                --main-header: #F87474;
                --main-title white; 
            }

            .header{
                width: 100%;
                height: 130px;
                border: solid red 1px;
                background-color: var(--main-header);
            }

            .header--flex{
                display:flex;
                justify-content: space-around;
                align-items: center;
            }

            .header__title{
                font-family: "Inter", sans-serif;
                font-size: 44px;
                color: white;
            }

            .header__button{
                width: 70px;
                height: 65px;
                background-color: var(--main-background);
                border-radius: 8px;
            }

            .header__icon{
                display: inline-flex;
                width: 70px;
                height: 65px;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                background-image: url(../assets/close3.svg);
                cursor: pointer;
            }

            .hidden{
                display:none
            }
        `
    ];


    /**
     * @description Define `titulo` es una propiedad de tipo cadena.
     * @property {string} titulo - El título del componente.
     */
    static get properties() {
        return {
            titulo: { type: String },
        };
    }

    /**
     * @description inicializa la propiedad `titulo` como una cadena vacía.
     * @constructor
     */
    constructor() {
        super();
        this.titulo = '';
    }


    /**
     * @description Genera y devuelve una plantilla HTML para el componente, incluyendo enlaces a fuentes y el encabezado con el título.
     * @returns {TemplateResult} Una plantilla HTML que incluye los enlaces a las fuentes de Google y un encabezado con el título.
     */
    render() {
        return html`
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
        </head>
            <div class="header header--flex">
                <span class="header__title header__title--inicio">${this.titulo}</span>
                <!-- <div class="${this.titulo === "Recargas y paquetes" ? "hidden":"header__button" }">
                    <span class="header__icon"></span>
                </div> -->
            </div>
        `;
    }
}
customElements.define('componente-titulo', ComponenteTitulo);
