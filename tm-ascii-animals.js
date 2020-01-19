import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

const CAT = `.       .
\\\`-"'"-'/
 } 6 6 {
=.  Y  ,=
  /^^^\\  .
 /     \\  )
(  )-(  )/
 ""   ""`;

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
 -khtml-user-select: none;
 -moz-user-select: none;
 -ms-user-select: none;
  user-select: none;
 -webkit-touch-callout: none;
 -webkit-user-select: none;
        }
        textarea:focus {
            outline: none;
        }
        textarea {
            width: auto;
            overflow: hidden;
            resize: none;
            border: none;

           outline: none;
        }
      </style>
      <textarea rows="[[rows]]" cols="[[columns]]" disabled>[[ascii]]</textarea>
    `;
    }

    static get properties() {
        return {
            title: {
                type: String,
                value: 'cat'
            },
            ascii: {
                type: String,
                value: CAT,
                observer: '_asciiChanged'
            },
            rows: {
                type: Number,
                value: 10,
                computed: '_calculateRows(ascii)'
            },
            columns: {
                type: Number,
                value: 10,
                computed: '_calculateColumns(ascii)',
                observer: '_debug'
            }
        };
    }

    _debug(value) {
        console.log('DEBUG: ', value);
    }

    _calculateRows(ascii) {
        return ascii.split('\n').length;
    }

    _calculateColumns(ascii) {
        return ascii.split('\n')
            .map(line => line.length)
            .reduce((largest, value) => (value > largest ? value : largest))*0.70;
    }
}



window.customElements.define('tm-ascii-animals', TmAsciiAnimals);
