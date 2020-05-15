class FlagIcon extends HTMLElement {
  constructor() {
    super();
    this._countryCode = null;
    this._color = "black";
  }

  static get observedAttributes() { return ["country", "color"]; }

  attributeChangedCallback(name, oldValue, newValue) {
    // name will always be "country" due to observedAttributes
    console.log(name, oldValue, newValue)
    if (name == "country") {
      this._countryCode = newValue;
    } else if (name == "color") {
      this._color = newValue;
    }
    this._updateRendering();
  }

  connectedCallback() {
    this._updateRendering();
  }

  get country() {
    return this._countryCode;
  }
  set country(v) {
    this.setAttribute("country", v);
  }

  // get color() {
  //   return this._color;
  // }
  // set color(v) {
  //   this.setAttribute("color", v);
  // }

  _updateRendering() {
    if (this.ownerDocument.defaultView) {
      let p = this.querySelector("p")
      if (!p) {
        p = document.createElement("p")
        this.appendChild(p)
      }
      p.innerText = this._countryCode
      p.style.color = this._color
    }
  }
}

customElements.define("flag-icon", FlagIcon);

const flagIcon = document.createElement("flag-icon")
flagIcon.country = "jp"
flagIcon.setAttribute("color", "pink")
// flagIcon.color = "pink"
document.body.appendChild(flagIcon)