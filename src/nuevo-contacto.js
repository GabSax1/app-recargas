import {LitElement, html,css} from 'lit-element';

class nuevoContacto extends LitElement {
    static get properties() {
        return {

        }
    }

    static get styles() {
        return 
            super.styles,
            css``;
    }

    render() {
        return html`
        <h1> Esto es un nuevo contacto</h1>
        `;
    }

}

customElements.define('nuevo-contacto', nuevoContacto);