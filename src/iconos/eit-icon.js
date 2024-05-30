import { LitElement, html, css } from "lit-element";

class EitIcon extends LitElement {
  static get properties() {
    return {
      icon: { type: String },
      icones: { type: Object },
    };
  }
  static get styles() {
    return css`
      :host[hidden] {
        display: none;
      }

      :host {
        display: inline-block;
        line-height: 0;
        position: relative;
        margin-right: 30px;
        top: 0.4em;
      }
      path {
        fill: var(--eit-icon-color, #f77574);
      }
      path[fill="none"] {
        fill: transparent;
      }
      svg {
        width: var(--eit-icon-size, 55px);
        height: var(--eit-icon-size, 55px);
        display: inline-block;
      }
    `;
  }

  constructor() {
    super();
    this.icon = "done";

    this.icones = {
      done: html`<svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="black"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
      </svg>`,
      add: html`<svg
        xmlns="http://www.w3.org/2000/svg"
        cursor="pointer"
        ;
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="black"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        />
      </svg>`,
      contacts: html`<svg
        xmlns="http://www.w3.org/2000/svg"
        cursor="pointer"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="black"
      >
        <path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none" />
        <path
          d="M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"
        />
      </svg>`,
      person: html`<svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#e8eaed"
      >
        <g><rect fill="none" height="24" width="24" /></g>
        <g>
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"
          />
        </g>
      </svg>`,
      succefull: html`<svg
        xmlns="http://www.w3.org/2000/svg"
        height="50px"
        viewBox="0 -960 960 960"
        width="50px"
        fill="green"
      >
        <path
          d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
        />
      </svg>`,
      cancel: html`<svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#5f6368"
      >
        <path
          d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
        />
      </svg>`,
    };
  }

  render() {
    return html` ${this.icones[this.icon]} `;
  }
}

customElements.define("eit-icon", EitIcon);
