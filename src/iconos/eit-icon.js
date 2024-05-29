import {LitElement, html, css} from 'lit-element';


class EitIcon extends LitElement {
    static get properties() {
        return {
            icon:{type:String},
            icones: {type: Object}
        }
    }
    static get styles() {
        return css`
        :host[hidden]{display: none;}

        :host {
            display: inline-block;
            line-height: 0;
            position: relative;
            top: 0.6em;
            margin-right: 30px;
            cursor:pointer;
        }
        path{
            fill: var(--eit-icon-color,#f77574);
        }
        path[fill="none"]{
            fill: transparent;
        }
        svg{
            width: var(--eit-icon-size, 55px);
            height: var(--eit-icon-size, 55px);
            display: inline-block;
        }
        `
    }

    constructor() {
        super();
        this.icon = 'done'

        this.icones = {
            done: html `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="black"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>`,
            add: html `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="black"><path d="M0 0h24v24H0z" fill="none"/><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
            contacts: html `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="black"><path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none"/><path d="M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"/></svg>`,
        }
    }

   
    render() {
        return html`
        ${this.icones[this.icon]}  
        `;
    }

}

customElements.define('eit-icon', EitIcon);