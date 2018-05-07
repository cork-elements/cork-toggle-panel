import {PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/iron-icon/iron-icon"
import "@polymer/iron-icons/iron-icons"

import template from "./cork-toggle-panel.html"

export class CorkTogglePanel extends PolymerElement {

  static get properties() {
    return {
      opened: {
        type: Boolean,
        value: false,
        notify : true
      },
      label: {
        type : String,
        value : ''
      }
    };
  }

  static get template() {
    return template;
  }

  open() {
    var h = 5;
    for( var i = 0; i < this.children.length; i++ ) {
      h += this.children[i].offsetHeight;
    }
    this.$.content.style.height = h+'px';
    this.opened = true;
  }

  close() {
    this.$.content.style.height = '0px';
    this.opened = false;
  }

  toggle() {
    if( this.opened ) this.close();
    else this.open();
  }

}

customElements.define('cork-toggle-panel', CorkTogglePanel);