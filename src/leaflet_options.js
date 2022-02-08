'use strict';

var L = require('leaflet');

var streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg', {
    attribution: '<a href="https://www.mapbox.com/about/maps">© Mapbox</a> <a href="https://openstreetmap.org/copyright">© OpenStreetMap</a> | <a href="https://mapbox.com/map-feedback/">Improve this map</a>'
  }),
  outdoors = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg', {
    attribution: '<a href="https://www.mapbox.com/about/maps">© Mapbox</a> <a href="https://openstreetmap.org/copyright">© OpenStreetMap</a> | <a href="https://mapbox.com/map-feedback/">Improve this map</a>'
  }),
  satellite = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg', {
    attribution: '<a href="https://www.mapbox.com/about/maps">© Mapbox</a> <a href="https://openstreetmap.org/copyright">© OpenStreetMap</a> | <a href="https://mapbox.com/map-feedback/">Improve this map</a>'
  }),
  osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright/en">OpenStreetMap</a> contributors'
  }),
  osm_de = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright/en">OpenStreetMap</a> contributors'
  }),
  small_components = L.tileLayer('https://tools.geofabrik.de/osmi/tiles/routing_i/{z}/{x}/{y}.png', {});

module.exports = {
  defaultState: {
    center: L.latLng(36.368222,-118.668823),
    zoom: 7,
    waypoints: [],
    language: 'en',
    alternative: 0,
    layer: streets
  },
  services: [{
    label: 'Car (fastest)',
    path: 'https://router.project-osrm.org/route/v1'
  }],
  layer: [{
    'Mapbox Streets': streets,
    'Mapbox Outdoors': outdoors,
    'Mapbox Streets Satellite': satellite,
    'openstreetmap.org': osm,
    'openstreetmap.de.org': osm_de
  }],
  overlay: {
    //'Small Components': small_components
  },
  baselayer: {
    one: streets,
    two: outdoors,
    three: satellite,
    four: osm,
    five: osm_de
  }
};
