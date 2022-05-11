
    var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    var osmURL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib = '&copy; ' + osmLink;

    //Carto tiles attribution and URL
    var cartoLink = '<a href="http://cartodb.com/attributions">CartoDB</a>';
    var cartoURL = 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';
    var cartoAttrib = '&copy; ' + osmLink + ' &copy; ' + cartoLink;

    //Basemap tiles attribution and URL
    var basemapLink = '<a href="basemap.at">Basemap</a>';
    var basemapURL = 'https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png';
    var basemapAttrib = '&copy; ' + osmLink + ' &copy; ' + basemapLink;

    //Stamen Toner tiles attribution and URL
    var stamenURL = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}';
    var stamenAttrib = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

    //Creation of map tiles
    var osmMap = L.tileLayer(osmURL, {attribution: osmAttrib});
    var cartoMap = L.tileLayer(cartoURL, {attribution: cartoAttrib});
    var baseMap = L.tileLayer(basemapURL, {
      attribution: basemapAttrib,
      subdomains: ['maps', 'maps1', 'maps2', 'maps3', 'maps4'],
      id: 'mapbox.streets'});
    var stamenMap = L.tileLayer(stamenURL,{
      attribution: stamenAttrib,
      subdomains: 'abcd',
      minZoom: 0,
      maxZoom: 20,
      ext: 'png'
    });

    //Map creation
    var mymap = L.map('mapid',{
      layers: [osmMap],
      //zoomControl: false,
            //dragging: false
    }).setView([48.240326, 16.373], 14);

    //Base layers definition and addition
    var baseLayers = {
      "OSM Mapnik": osmMap,
      "Carto DarkMatter": cartoMap,
      "Basemap": baseMap,
      "Stamen Toner": stamenMap
    };

    L.control.layers(baseLayers).addTo(mymap);

    //Add scale to map
    L.control.scale().addTo(mymap);

    var greenIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    var pinkIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    var redIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    var marker1 = L.marker([48.239155, 16.377445], {icon: greenIcon} ).addTo(mymap);
    var marker2 = L.marker([48.19023, 16.41513], {icon: redIcon}).addTo(mymap);
    var marker3 = L.marker([48.16951, 16.34415], {icon: pinkIcon}).addTo(mymap);
    var marker4 = L.marker([48.251413667019534, 16.35633140647688]).addTo(mymap);

    marker1.bindPopup("<b>FH Technikum Wien</b><br> Data Center").openPopup();
    marker2.bindPopup("<b>Wiener Linien</b><br> Data Center").openPopup();
    marker3.bindPopup("<b>WGKK</b><br> Data Center").openPopup();
    marker4.bindPopup("<b>Wetter</b><br> Data Center").openPopup();
    
  var wienerlinienfh = [[marker2[0],marker2[1]], [marker1[0],marker1[1]]];
	var wgkkfh = [[marker3[0],marker3[1]], [marker1[0],marker1[1]]];
	var wetterfh = [[marker4[0],marker4[1]], [marker1[0],marker1[1]]];

	/////
//=======================================================================


var latlngs = [];

var latlng1 = [marker1[0],marker1[1]],
  latlng2 = [marker2[0],marker2[1]];
  calc(latlng2);

var pathOptions = {
  color: 'red',
  weight: 3
}

var curvedPath = L.curve(
  [
    'M', latlng1,
    'Q', midpointLatLng,
    latlng2
  ], pathOptions).addTo(mymap);

  var latlng3 = [marker3[0],marker3[1]];
  var latlng4 = [marker4[0],marker4[1]];
  calc(latlng3);

  var pathOptions1 = {
    color: 'blue',
    weight: 3
  }

  var curvedPath1 = L.curve(
    [
      'M', latlng1,
      'Q', midpointLatLng,
      latlng3
    ], pathOptions1).addTo(mymap);

    calc(latlng4);
    var pathOptions2 = {
      color: 'green',
      weight: 3
    }

    var curvedPath2 = L.curve(
      [
        'M', latlng1,
        'Q', midpointLatLng2,
        latlng4
      ], pathOptions2).addTo(mymap);
	  
	  
var marker5 = L.Marker.movingMarker(wienerlinienfh, [10000]).addTo(mymap);
movement(marker5, wienerlinienfh);

var marker6 = L.Marker.movingMarker(wgkkfh, [10000]).addTo(mymap);
movement(marker6, wgkkfh);

var marker7 = L.Marker.movingMarker(wetterfh, [10000]).addTo(mymap);
movement(marker7, wetterfh);

//========================================================================


function movement(marker, pos){
  L.polyline(pos).addTo(mymap);
  marker.once('click', function () {
    marker.start();
    marker.closePopup();
    marker.unbindPopup();
    marker.on('click', function() {
          if (marker.isRunning()) {
            marker.pause();
          } else {
            marker.start();
          }
      });
      setTimeout(function() {
        marker.bindPopup('<b>Click me to pause !</b>').openPopup();
      }, 10000);
  });
  
  marker.bindPopup('<b>Click me to start !</b>', {closeOnClick: false});
  marker.openPopup();
}

function calc(latlng){
  var offsetX = latlng[1] - latlng1[1],
  offsetY = latlng[0] - latlng1[0];

var r = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2)),
  theta = Math.atan2(offsetY, offsetX);

var thetaOffset = (3.14 / 14);

var r2 = (r / 2) / (Math.cos(thetaOffset)),
  theta2 = theta + thetaOffset;

var midpointX = (2*r2 * Math.cos(theta2)) + latlng1[1],
  midpointY = (r2 * Math.sin(theta2)) + latlng1[0];

var midpointLatLng = [midpointY, midpointX];

latlngs.push(latlng1, midpointLatLng, latlng);
}