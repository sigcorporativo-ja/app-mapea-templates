import html from './map.html'

export default class ViewMap extends HTMLElement {
  connectedCallback () {
    this.innerHTML = html
  }
}
