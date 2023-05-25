/**
 * Mapea API
 * Version 6.4.0
 * Date 09-03-2023
 */
(function(M) {
  /**
   * Pixels width for mobile devices
   *
   * @private
   * @type {Number}
   */
  M.config('MOBILE_WIDTH', 768);

  /**
   * The Mapea URL
   * @const
   * @type {string}
   * @public
   * @api stable
   */
  M.config('MAPEA_URL', 'https://sigc-dev-ol.desarrollo.guadaltel.es/mapea6');

  /**
   * The path to the Mapea proxy to send
   * jsonp requests
   * @const
   * @type {string}
   * @public
   * @api stable
   */
  M.config('PROXY_URL', 'https://sigc-dev-ol.desarrollo.guadaltel.es/mapea6/api/proxy');

  /**
   * The path to the Mapea proxy to send
   * jsonp requests
   * @const
   * @type {string}
   * @public
   * @api stable
   */
  M.config('PROXY_POST_URL', 'https://sigc-dev-ol.desarrollo.guadaltel.es/mapea6/proxyPost');

  /**
   * The path to the Mapea templates
   * @const
   * @type {string}
   * @public
   * @api stable
   */
  M.config('TEMPLATES_PATH', '/files/templates/');

  /**
   * The path to the Mapea theme
   * @const
   * @type {string}
   * @public
   * @api stable
   */
  M.config('THEME_URL', 'https://sigc-dev-ol.desarrollo.guadaltel.es/mapea6/assets/');

  /**
   * The Geosearch URL
   * @const
   * @type {string}
   * @public
   * @api stable
   */
  M.config('GEOSEARCH_URL', 'https://geobusquedas-sigc.juntadeandalucia.es');

  /**
   * The Geosearch core
   * @const
   * @type {string}
   * @public
   * @api stable
   */
  M.config('GEOSEARCH_CORE', 'sigc');

  /**
   * The Geosearch handler
   * @const
   * @type {string}
   * @public
   * @api stable
   */
  M.config('GEOSEARCH_HANDLER', '/search?');

  /**
   * The Geosearch distance
   * @const
   * @type {int}
   * @public
   * @api stable
   */
  M.config('GEOSEARCH_DISTANCE', '600');

  /**
   * The Geosearchbylocation spatial field
   * @const
   * @type {string}
   * @public
   * @api stable
   */
  M.config('GEOSEARCH_SPATIAL_FIELD', 'geom');

  /**
   * The Geosearch rows
   * @const
   * @type {string}
   * @public
   * @api stable
   */
  M.config('GEOSEARCH_ROWS', '20');

  /**
   * The Geosearch rows
   * @const
   * @type {string}
   * @public
   * @api stable
   */
  M.config('GEOSEARCHBYLOCATION_ROWS', '100');

  /**
   * Predefined WMC files. It is composed of URL,
   * predefined name and context name.
   * @type {object}
   * @public
   * @api stable
   */
  M.config('predefinedWMC', {
    /**
     * Predefined WMC URLs
     * @const
     * @type {Array<string>}
     * @public
     * @api stable
     */
    'urls': 'https://sigc-dev-ol.desarrollo.guadaltel.es/mapea6/files/wmc/mapa.xml,https://sigc-dev-ol.desarrollo.guadaltel.es/mapea6/files/wmc/hibrido.xml,https://sigc-dev-ol.desarrollo.guadaltel.es/mapea6/files/wmc/satelite.xml,https://sigc-dev-ol.desarrollo.guadaltel.es/mapea6/files/wmc/context_cdau_callejero.xml,https://sigc-dev-ol.desarrollo.guadaltel.es/mapea6/files/wmc/context_cdau_hibrido.xml,https://sigc-dev-ol.desarrollo.guadaltel.es/mapea6/files/wmc/context_cdau_satelite.xml,https://sigc-dev-ol.desarrollo.guadaltel.es/mapea6/files/wmc/contextCallejeroCache.xml,https://sigc-dev-ol.desarrollo.guadaltel.es/mapea6/files/wmc/contextCallejero.xml,https://sigc-dev-ol.desarrollo.guadaltel.es/mapea6/files/wmc/contextIDEA.xml,https://sigc-dev-ol.desarrollo.guadaltel.es/mapea6/files/wmc/contextOrtofoto2009.xml,https://sigc-dev-ol.desarrollo.guadaltel.es/mapea6/files/wmc/callejero2011cache.xml,https://sigc-dev-ol.desarrollo.guadaltel.es/mapea6/files/wmc/ortofoto2011cache.xml,https://sigc-dev-ol.desarrollo.guadaltel.es/mapea6/files/wmc/hibrido2011cache.xml,https://sigc-dev-ol.desarrollo.guadaltel.es/mapea6/files/wmc/contextOrtofoto.xml'.split(',').map(e => e),

    /**
     * WMC predefined names
     * @const
     * @type {Array<string>}
     * @public
     * @api stable
     */
    'predefinedNames': 'mapa,hibrido,satelite,cdau,cdau_hibrido,cdau_satelite,callejerocacheado,callejero,idea,ortofoto09,callejero2011cache,ortofoto2011cache,hibrido2011cache,ortofoto'.split(','),

    /**
     * WMC context names
     * @const
     * @type {Array<string>}
     * @public
     * @api stable
     */
    'names': 'Mapa,Hibrido,Satelite,Callejero,Hibrido,Satelite,mapa callejero cache,mapa del callejero,mapa idea,mapa ortofoto09,Callejero,Ortofoto,H??brido,mapa ortofoto'.split(',')
  });

  /**
   * TODO
   * @type {object}
   * @public
   * @api stable
   */
  M.config('tileMappgins', {
    /**
     * Predefined WMC URLs
     * @const
     * @type {Array<string>}
     * @public
     * @api stable
     */
    'tiledNames': 'base,SPOT_Andalucia,orto_2010-11_25830,CallejeroCompleto,orto_2010-11_23030'.split(','),

    /**
     * WMC predefined names
     * @const
     * @type {Array<string>}
     * @public
     * @api stable
     */
    'tiledUrls': 'https://www.callejerodeandalucia.es/servicios/base/gwc/service/wms?,https://www.callejerodeandalucia.es/servicios/base/gwc/service/wms?,https://www.ideandalucia.es/geowebcache/service/wms?,https://www.juntadeandalucia.es/servicios/mapas/callejero/wms-tiled?,https://www.ideandalucia.es/geowebcache/service/wms?'.split(',').map(e => e),

    /**
     * WMC context names
     * @const
     * @type {Array<string>}
     * @public
     * @api stable
     */
    'names': 'CDAU_base,mosaico_spot_2005,orto_2010-11,CallejeroCompleto,orto_2010-11'.split(','),

    /**
     * WMC context names
     * @const
     * @type {Array<string>}
     * @public
     * @api stable
     */
    'urls': 'https://www.callejerodeandalucia.es/servicios/base/wms?,https://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_SPOT_Andalucia_2005?,https://www.ideandalucia.es/wms/ortofoto2010?,https://www.juntadeandalucia.es/servicios/mapas/callejero/wms?,https://www.ideandalucia.es/wms/ortofoto2010?'.split(',').map(e => e)
  });

  /**
   * Default projection
   * @const
   * @type {string}
   * @public
   * @api stable
   */
  M.config('DEFAULT_PROJ', 'EPSG:25830*m');

  /**
   * Predefined WMC files. It is composed of URL,
   * predefined name and context name.
   * @type {object}
   * @public
   * @api stable
   */
  M.config('geoprint', {
    /**
     * Printer service URL
     * @const
     * @type {Array<string>}
     * @public
     * @api stable
     */
    'URL': 'https://geoprint-sigc.juntadeandalucia.es/geoprint/pdf',

    /**
     * WMC predefined names
     * @const
     * @type {Array<string>}
     * @public
     * @api stable
     */
    'DPI': 120,

    /**
     * WMC context names
     * @const
     * @type {Array<string>}
     * @public
     * @api stable
     */
    'FORMAT': 'pdf',

    /**
     * WMC context names
     * @const
     * @type {Array<string>}
     * @public
     * @api stable
     */
    'TEMPLATE': 'A4 landscape (SIGC)',

    /**
     * WMC context names
     * @const
     * @type {Array<string>}
     * @public
     * @api stable
     */
    'FORCE_SCALE': false,

    /**
     * TODO
     * @const
     * @type {boolean}
     * @public
     * @api stable
     */
    'LEGEND': true
  });

  /**
   * Geoprint configuration.
   * @type {object}
   * @public
   * @api stable
   */
  M.config('geoprint2', {
    /**
     * Printer service URL
     * @const
     * @type {Array<string>}
     * @public
     * @api stable
     */
    'URL': 'https://geoprint.desarrollo.guadaltel.es/print/SIGC',

    /**
     * Printer service URL
     * @const
     * @type {Array<string>}
     * @public
     * @api stable
     */
    'URL_APPLICATION': 'https://geoprint.desarrollo.guadaltel.es',
  });

  /**
   * Predefined WMC files. It is composed of URL,
   * predefined name and context name.
   * @type {object}
   * @public
   * @api stable
   */
  M.config('panels', {
    /**
     * TODO
     * @const
     * @type {Array<string>}
     * @public
     * @api stable
     */
    'TOOLS': 'measurebar,measurelength,measureclear,measurearea,getfeatureinfo'.split(','),

    /**
     * TODO
     * @const
     * @type {Array<string>}
     * @public
     * @api stable
     */
    'EDITION': 'drawfeature,modifyfeature,deletefeature,editattribute,savefeature,clearfeature'.split(',')
  });

  /**
   * Searchstreet service URL
   * @const
   * @type {string}
   * @public
   * @api stable
   */
  M.config('SEARCHSTREET_URL', 'https://ws248.juntadeandalucia.es/EXT_PUB_CallejeroREST/geocoderMunProvSrs');

  /**
   * Autocomplete municipality service URL
   * @const
   * @type {string}
   * @public
   * @api stable
   */
  M.config('SEARCHSTREET_URLCODINEAUTOCOMPLETE', 'https://ws248.juntadeandalucia.es/EXT_PUB_CallejeroREST/autocompletarDireccionMunicipio');

  /**
   * service URL check code INE
   * @const
   * @type {string}
   * @public
   * @api stable
   */
  M.config('SEARCHSTREET_URLCOMPROBARINE', 'https://ws248.juntadeandalucia.es/EXT_PUB_CallejeroREST/comprobarCodIne');

  /**
   * Normalizar searchstreet service URL
   * @const
   * @type {string}
   * @public
   * @api stable
   */
  M.config('SEARCHSTREET_NORMALIZAR', 'https://ws248.juntadeandalucia.es/EXT_PUB_CallejeroREST/normalizar');

  /**
   * Minimum number of characters to start autocomplete
   * @const
   * @type {number}
   * @public
   * @api stable
   */
  M.config('AUTOCOMPLETE_MINLENGTH', '3');

  /**
   * TODO
   *
   * @private
   * @type {Number}
   */
  M.config('AUTOCOMPLETE_DELAYTIME', '750');

  /**
   * Number of results to show
   *
   * @private
   * @type {Number}
   */
  M.config('AUTOCOMPLETE_LIMIT', '10');

  /**
   * TODO
   *
   * @private
   * @type {String}
   */
  M.config('MAPBOX_URL', 'https://api.mapbox.com/v4/');

  /**
   * TODO
   *
   * @private
   * @type {String}
   */
  M.config('MAPBOX_EXTENSION', 'png');

  /**
   * TODO
   *
   * @private
   * @type {String}
   */
  M.config('MAPBOX_TOKEN_NAME', 'access_token');

  /**
   * TODO
   *
   * @private
   * @type {String}
   */
  M.config('MAPBOX_TOKEN_VALUE', 'pk.eyJ1IjoiZ3VhZGFsdGVsc2lnYyIsImEiOiJjaXppOTE0M2wwMDNiMzNvM3JiZ2h4Zmt3In0.MHjbdKBozmgW0T8LhGDcAA');

  /**
   * Number of pages for the plugin AttributeTable
   *
   * @private
   * @type {String}
   */
  M.config('ATTRIBUTETABLE_PAGES', '5');

  /**
   * Zoom levels
   *
   * @private
   * @type {Number}
   */
  M.config('ZOOM_LEVELS', '16');
})(window.M);