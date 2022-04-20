import html from './acordeon.html'
const ZOOM_PROV = 6

export default class ViewAcordeon extends HTMLElement {
  constructor() {
    super()
    this.sizeObserver = new ResizeObserver(() => {
      if (this.olMap) {
        this.olMap.updateSize()
      }
    })
  }
  connectedCallback() {
    this.innerHTML = html
  
    // this._selectContext = this.querySelector('#contextAccordion')
    
    let this_ = this;
    this.querySelector('#satelite').addEventListener('click',function(evt){
      this_.cambiaWmc('mapa')
    })
    document.querySelector('#cdau').addEventListener('click',function(evt){
      this_.cambiaWmc('satelite')
    })

    this.mMap = new M.map({
      container: 'map',
      controls: ['scale'],
    })
    this.olMap = this.mMap.getMapImpl()
    this.sizeObserver.observe(this)
  }

  cambiaWmc(wmc){
   const accordionGroup = document.querySelector('ion-accordion-group#contextAccordion');
   accordionGroup.value = undefined;
   let bboxActual = this.mMap.getBbox();
   let zoomActual = this.mMap.getZoom();
   this.mMap.destroy();
   this.mMap = new M.map({
    container: 'map',
    wmcfile: [wmc],
    controls: ['scale'],
    bbox: bboxActual,
    zoom: zoomActual
  })

  }
}
