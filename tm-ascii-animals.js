import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `tm-ascii-animals`
 * Polymer web component to render animal ascii art
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TmAsciiAnimals extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'tm-ascii-animals',
      },
    };
  }
}

window.customElements.define('tm-ascii-animals', TmAsciiAnimals);
