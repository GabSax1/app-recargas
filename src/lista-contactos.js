import {LitElement, html, css} from 'lit-element';


class listaContactos extends LitElement {
    static get properties() {
        return {
            currentView:{type: String}
        }
    }

    constructor() {
        super();
        this.currentView = 'listaContactos'
    }

    static get styles() {
        return css`
            :host{

            }
            .hidden {
                display: none;
            }
            
            `;
    }

    render() {
        return html`
            <div class="${this.currentView === 'listaContactos' ? '' : 'hidden'}">
                ${this.renderList()}
                <button @click="${() => this.navigate('modificarContacto')}">Modificar contacto</button>
            </div>

            
            <div class="${this.currentView === 'modificarContacto' ? '' : 'hidden'}">
                <h1>Componente modificar contacto</h1>
                
            </div>  
        `;  
    }
    renderList(){
        return html `
        <h1>Aqui se muestra la lista de contactos</h1>
        `
    }
    navigate(page){
        this.currentView = page;
    }
}

customElements.define('lista-contactos', listaContactos);