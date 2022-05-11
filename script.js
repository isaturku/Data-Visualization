var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
var osmURL = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
var osmAttrib = "&copy; " + osmLink;

//Carto tiles attribution and URL
var cartoLink = '<a href="http://cartodb.com/attributions">CartoDB</a>';
var cartoURL = "http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png";
var cartoAttrib = "&copy; " + osmLink + " &copy; " + cartoLink;

//Basemap tiles attribution and URL
var basemapLink = '<a href="basemap.at">Basemap</a>';
var basemapURL =
  "https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png";
var basemapAttrib = "&copy; " + osmLink + " &copy; " + basemapLink;

//Stamen Toner tiles attribution and URL
var stamenURL =
  "http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}";
var stamenAttrib =
  'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

// configs
var interval = 15000;
var setView = [48.240326, 16.473];
var setViewZoom = 11; //0-20
var iconSize = [25, 41];
var iconAnchor = [12, 41];
var popupAnchor = [1, -34];
var shadowSize = [41, 41];
var markercoord1 = [48.239155, 16.377445];
var markercoord2 = [48.19023, 16.41513];
var markercoord3 = [48.16951, 16.34415];
var markercoord4 = [48.251413667019534, 16.35633140647688];
var durationcity = 2000;
var durationwg = 2000;
var durationwl = 5000;
var colorpath1 = "red";
var colorpath2 = "blue";
var colorpath3 = "yellow";
var pathweight = 3;

//Creation of map tiles
var osmMap = L.tileLayer(osmURL, { attribution: osmAttrib });
var cartoMap = L.tileLayer(cartoURL, { attribution: cartoAttrib });
var baseMap = L.tileLayer(basemapURL, {
  attribution: basemapAttrib,
  subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"],
  id: "mapbox.streets",
});
var stamenMap = L.tileLayer(stamenURL, {
  attribution: stamenAttrib,
  subdomains: "abcd",
  minZoom: 0,
  maxZoom: 20,
  ext: "png",
});

//Map creation
var mymap = L.map("mapid", {
  layers: [cartoMap],
  //zoomControl: false,
  //dragging: false
}).setView(setView, setViewZoom);

//Base layers definition and addition
var baseLayers = {
  "OSM Mapnik": osmMap,
  "Carto DarkMatter": cartoMap,
  Basemap: baseMap,
  "Stamen Toner": stamenMap,
};

L.control.layers(baseLayers).addTo(mymap);

//Add scale to map
L.control.scale().addTo(mymap);

var greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: iconSize,
  iconAnchor: iconAnchor,
  popupAnchor: popupAnchor,
  shadowSize: shadowSize,
});

var pinkIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: iconSize,
  iconAnchor: iconAnchor,
  popupAnchor: popupAnchor,
  shadowSize: shadowSize,
});

var redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: iconSize,
  iconAnchor: iconAnchor,
  popupAnchor: popupAnchor,
  shadowSize: shadowSize,
});
var marker1 = L.marker(markercoord1, { icon: greenIcon }).addTo(mymap);
var marker2 = L.marker(markercoord2).addTo(mymap);
var marker3 = L.marker(markercoord3, { icon: pinkIcon }).addTo(mymap);
var marker4 = L.marker(markercoord4, {
  icon: redIcon,
}).addTo(mymap);

let sidebarToggle = false;
let sidebarContent = 1;
marker2.bindPopup(`<b>Wiener Linien</b><br> Data Center`);
marker3.bindPopup("<b>City Bikes</b><br> Data Center");
marker4.bindPopup(`<b>Wetter</b><br> Data Center`);
marker1.bindPopup("<b>FH Technikum Wien</b><br> Data Center");

setTimeout(function () {
  marker1.openPopup();
}, 2000); //popup of marker1 will show up after 2 sec delay
setTimeout(function () {
  marker1.closePopup();
}, 40000); //after 4 secs the first popup will be closed
setTimeout(function () {
  marker2.openPopup();
}, 4000); //4 secs delay
setTimeout(function () {
  marker2.closePopup();
}, 60000); //after 6 secs the 2nd popup will be closed
setTimeout(function () {
  marker3.openPopup();
}, 6000); //6 secs delay
setTimeout(function () {
  marker3.closePopup();
}, 80000); //after 8 secs the 3rd popup will be closed
setTimeout(function () {
  marker4.openPopup();
}, 8000); //8 secs delay
setTimeout(function () {
  marker4.closePopup();
}, 10000); //after 10 secs the last popup will be closed

var wienerlinienfh = [
  [marker2[0], marker2[1]],
  [marker1[0], marker1[1]],
];
var wgkkfh = [
  [marker3[0], marker3[1]],
  [marker1[0], marker1[1]],
];
var wetterfh = [
  [marker4[0], marker4[1]],
  [marker1[0], marker1[1]],
];

/////
//=======================================================================

var latlng1 = [markercoord1[0], markercoord1[1]],
  latlng2 = [markercoord2[0], markercoord2[1]];

var line1 = calc(latlng2, latlng1);
console.log(line1);

var pathOptions1 = {
  color: colorpath1,
  weight: pathweight,
};

var curvedPath1 = L.curve(
  ["M", line1[2], "Q", line1[1], line1[0]],
  pathOptions1
);
curvedPath1.addTo(mymap);

//var latlng3 = [48.239155, 16.377445];
var latlng3 = markercoord3;

var line2 = calc(latlng3, latlng1);

console.log(line2);

var pathOptions2 = {
  color: colorpath2,
  weight: pathweight,
};

var curvedPath2 = L.curve(
  [
    "M",
    line2[2], //ktu jan ndrru venet e pikave  te linjes, me perpara pika e fillimit ka qene fh tani fh eshte pika e marimit n mnzr q animimi t vi tu shku per te fh
    "Q",
    line2[1],
    line2[0],
  ],
  pathOptions2
).addTo(mymap);

var latlng4 = markercoord4;
//var latlng4 = [marker4[0], marker4[1]];

var line3 = calc(latlng4, latlng1);

console.log(line3);

var pathOptions3 = {
  color: colorpath3,
  weight: pathweight,
};

var curvedPath3 = L.curve(
  ["M", line3[2], "Q", line3[1], line3[0]],
  pathOptions3
).addTo(mymap);

//var marker5 = L.Marker.movingMarker(line1, [10000]).addTo(mymap);
//movement(marker5, line1);

//var line1_2 = [line1[1], line1[2]];
//marker5 = L.Marker.movingMarker(line1_2, [10000]).addTo(mymap);
//movement(marker5, line1_2);

//var marker6 = L.Marker.movingMarker(wgkkfh, [10000]).addTo(mymap);
//movement(marker6, wgkkfh);

//var marker7 = L.Marker.movingMarker(wetterfh, [10000]).addTo(mymap);
//movement(marker7, wetterfh);

//========================================================================

function movement(marker, pos) {
  L.polyline(pos).addTo(mymap);
  marker.once("click", function () {
    marker.start();
    marker.closePopup();
    marker.unbindPopup();
    marker.on("click", function () {
      if (marker.isRunning()) {
        marker.pause();
      } else {
        marker.start();
      }
    });
    setTimeout(function () {
      marker.bindPopup("<b>Click me to pause !</b>").openPopup();
    }, 10000);
  });

  marker.bindPopup("<b>Click me to start !</b>", { closeOnClick: false });
  marker.openPopup();
}

// To do packet moves
function calc(latlng, latlngfh) {
  var latlngs = [];

  var offsetX = latlng[1] - latlngfh[1],
    offsetY = latlng[0] - latlngfh[0];

  var r = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2)),
    theta = Math.atan2(offsetY, offsetX);

  var thetaOffset = 3.14 / 4;

  var r2 = r / 2 / Math.cos(thetaOffset),
    theta2 = theta + thetaOffset;

  var midpointX = 2 * r2 * Math.cos(theta2) + latlngfh[1],
    midpointY = r2 * Math.sin(theta2) + latlngfh[0];

  var midpointLatLng = [midpointY, midpointX];

  latlngs.push(latlngfh, midpointLatLng, latlng);

  return latlngs;
}

function playall() {
  if (!toggleall) {
    playcity();
    playwg();
    playwl();
  } else {
    playcity();
    playwg();
    playwl();
  }
}
function init() {
  playall();
  getWeatherInfo();
  getBikesInfo();
  getTransportInfo();
}

var toggleall = false;

function startall() {
  if (!toggleall) {
    startcity();
    startwg();
    startwl();

    document.getElementById("allbuttonloop").innerHTML =
      '<span class="material-icons">stop</span>';
    document
      .getElementById("allbuttonloop")
      .classList.replace("startBtn", "stopBtn");
    toggleall = true;
  } else {
    startcity();
    startwg();
    startwl();

    document.getElementById("allbuttonloop").innerHTML =
      '<span class="material-icons">loop</span>';
    document
      .getElementById("allbuttonloop")
      .classList.replace("stopBtn", "startBtn");
    toggleall = false;
  }
}

function playwl() {
  pathOptions1.animate = {
    duration: durationwl,
    iterations: 1,
    easing: "ease-in-out",
    direction: "normal",
  };
  curvedPath1.remove();
  curvedPath1 = L.curve(
    ["M", line1[2], "Q", line1[1], line1[0]],
    pathOptions1
  ).addTo(mymap);
  if (toggledwl != false) {
    // if loop is on, turn off when play button is triggered
    document.getElementById("wlbuttonloop").innerHTML =
      '<span class="material-icons">loop</span>';
    document
      .getElementById("wlbuttonloop")
      .classList.replace("stopBtn", "startBtn");
    toggledwl = false;
  }

  document
    .getElementById("wlbuttonplay")
    .classList.replace("startBtn", "stopBtn");
  setTimeout(function () {
    document
      .getElementById("wlbuttonplay")
      .classList.replace("stopBtn", "startBtn");
  }, 100); //function excecuted delayed
}

var toggledwl = false;

function startwl() {
  if (!toggledwl) {
    pathOptions1.animate = {
      duration: durationwl,
      iterations: Infinity,
      easing: "ease-in-out",
      direction: "normal",
    };
    curvedPath1.remove();
    curvedPath1 = L.curve(
      ["M", line1[2], "Q", line1[1], line1[0]],
      pathOptions1
    ).addTo(mymap);
    document.getElementById("wlbuttonloop").innerHTML =
      '<span class="material-icons">stop</span>';
    document
      .getElementById("wlbuttonloop")
      .classList.replace("startBtn", "stopBtn");
    toggledwl = true;
  } else {
    pathOptions1.animate = {};
    curvedPath1.remove();
    curvedPath1 = L.curve(
      ["M", line1[2], "Q", line1[1], line1[0]],
      pathOptions1
    ).addTo(mymap);
    document.getElementById("wlbuttonloop").innerHTML =
      '<span class="material-icons">loop</span>';
    document
      .getElementById("wlbuttonloop")
      .classList.replace("stopBtn", "startBtn");
    toggledwl = false;
  }
}

function playcity() {
  pathOptions2.animate = {
    duration: durationcity,
    iterations: 1,
    easing: "ease-in-out",
    direction: "normal",
  };
  curvedPath2.remove();
  curvedPath2 = L.curve(
    ["M", line2[2], "Q", line2[1], line2[0]],
    pathOptions2
  ).addTo(mymap);
  if (toggledcity != false) {
    // if loop is on, turn off when play button is triggered
    document.getElementById("citybuttonloop").innerHTML =
      '<span class="material-icons">loop</span>';
    document
      .getElementById("citybuttonloop")
      .classList.replace("stopBtn", "startBtn");
    toggledcity = false;
  }

  document
    .getElementById("citybuttonplay")
    .classList.replace("startBtn", "stopBtn");
  setTimeout(function () {
    document
      .getElementById("citybuttonplay")
      .classList.replace("stopBtn", "startBtn");
  }, 100); //function excecuted delayed
}

var toggledcity = false;

function startcity() {
  if (!toggledcity) {
    pathOptions2.animate = {
      duration: durationcity,
      iterations: Infinity,
      easing: "ease-in-out",
      direction: "normal",
    };
    curvedPath2.remove();
    curvedPath2 = L.curve(
      ["M", line2[2], "Q", line2[1], line2[0]],
      pathOptions2
    ).addTo(mymap);
    document.getElementById("citybuttonloop").innerHTML =
      '<span class="material-icons">stop</span>';
    document
      .getElementById("citybuttonloop")
      .classList.replace("startBtn", "stopBtn");
    toggledcity = true;
  } else {
    pathOptions2.animate = {};
    curvedPath2.remove();
    curvedPath2 = L.curve(
      ["M", line2[2], "Q", line2[1], line2[0]],
      pathOptions2
    ).addTo(mymap);
    document.getElementById("citybuttonloop").innerHTML =
      '<span class="material-icons">loop</span>';
    document
      .getElementById("citybuttonloop")
      .classList.replace("stopBtn", "startBtn");
    toggledcity = false;
  }
}
function playwg() {
  pathOptions3.animate = {
    duration: durationwg,
    iterations: 1,
    easing: "ease-in-out",
    direction: "normal",
  };
  curvedPath3.remove();
  curvedPath3 = L.curve(
    ["M", line3[2], "Q", line3[1], line3[0]],
    pathOptions3
  ).addTo(mymap);
  if (toggledwg != false) {
    // if loop is on, turn off when play button is triggered
    document.getElementById("wgbuttonloop").innerHTML =
      '<span class="material-icons">loop</span>';
    document
      .getElementById("wgbuttonloop")
      .classList.replace("stopBtn", "startBtn");
    toggledwg = false;
  }

  document
    .getElementById("wgbuttonplay")
    .classList.replace("startBtn", "stopBtn");
  setTimeout(function () {
    document
      .getElementById("wgbuttonplay")
      .classList.replace("stopBtn", "startBtn");
  }, 100); //function excecuted delayed
}

var toggledwg = false;

function startwg() {
  if (!toggledwg) {
    pathOptions3.animate = {
      duration: durationwg,
      iterations: Infinity,
      easing: "ease-in-out",
      direction: "normal",
    };
    curvedPath3.remove();
    curvedPath3 = L.curve(
      ["M", line3[2], "Q", line3[1], line3[0]],
      pathOptions3
    ).addTo(mymap);
    toggledwg = true;
    document.getElementById("wgbuttonloop").innerHTML =
      '<span class="material-icons">stop</span>';
    document
      .getElementById("wgbuttonloop")
      .classList.replace("startBtn", "stopBtn");
  } else {
    pathOptions3.animate = {};
    curvedPath3.remove();
    curvedPath3 = L.curve(
      ["M", line3[2], "Q", line3[1], line3[0]],
      pathOptions3
    ).addTo(mymap);
    document.getElementById("wgbuttonloop").innerHTML =
      '<span class="material-icons">loop</span>';
    document
      .getElementById("wgbuttonloop")
      .classList.replace("stopBtn", "startBtn");
    toggledwg = false;
  }
}
window.setInterval(function () {
  playall();
  getWeatherInfo();
  getBikesInfo();
  getTransportInfo();
}, interval);
const circularProgress = `<div class="mdc-circular-progress--indeterminate" style="width:48px;height:48px;" role="progressbar" aria-label="Example Progress Bar" aria-valuemin="0" aria-valuemax="1">
<div class="mdc-circular-progress__indeterminate-container" style="width:48px;height:48px;>
  <div class="mdc-circular-progress__spinner-layer">
    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
      <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549" stroke-width="4"/>
      </svg>
    </div>
    <div class="mdc-circular-progress__gap-patch">
      <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549" stroke-width="3.2"/>
      </svg>
    </div>
    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
      <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549" stroke-width="4"/>
      </svg>
    </div>
  </div>
</div>
</div>`;

const closeBtn = `<div id="closeBtn" onClick="closeSidebar()"><span class="material-icons">close</span></div><br><br> `;

// function openSidebar() {
//   document.getElementById("infoSidebar").style.width = "25%";
//   sidebarToggle = true;
// }

// function closeSidebar() {
//   sidebarToggle = false;
//   document.getElementById("infoSidebar").style.width = "0%";
//   document.getElementById("infoSidebar").childNodes.forEach((child) => {
//     if (child.nodeType === 1) child.style.opacity = "0";
//   });
// }
function getWeatherInfo() {
  const xhttp = new XMLHttpRequest();
  xhttp.onloadstart = async function () {
    document.getElementById("weather").innerHTML = circularProgress;
  };
  xhttp.onload = function () {
    const xml = this.responseXML;
    const temp = xml
      .getElementsByTagName("temperature")[0]
      .getAttribute("value");
    const wind = xml.getElementsByTagName("wind")[0];
    const windspeed = wind.childNodes[0].getAttribute("value");
    const winddirection = wind.childNodes[2].getAttribute("code");
    const weatherdesc = xml
      .getElementsByTagName("weather")[0]
      .getAttribute("value");
    const weathericon = `http://openweathermap.org/img/wn/${xml
      .getElementsByTagName("weather")[0]
      .getAttribute("icon")}.png`;
    document.getElementById(
      "weather"
    ).innerHTML = `<p style = "text-align:center";><b>Wetter</b><br><img src="${weathericon}"><br>${weatherdesc}<br>Temp: ${temp} °C<br> Wind Speed: ${windspeed} m/s<br>Wind Direction: ${winddirection}</p>`;
    sidebarContent = 1;
  };
  xhttp.open("GET", "weather.php");
  xhttp.send();
}
// marker4.addEventListener("click", function () {
//   if (!sidebarToggle) {
//     getWeatherInfo();
//     openSidebar();
//   } else {
//     if (sidebarContent == 1) {
//       closeSidebar();
//     } else getWeatherInfo();
//   }
// });
function getTransportInfo() {
  const xhttp = new XMLHttpRequest();
  xhttp.onloadstart = function () {
    document.getElementById("wlinien").innerHTML = circularProgress;
  };
  xhttp.onload = function () {
    const xml = this.responseXML;
    var content = `<img class="logo" src="https://www.wienerlinien.at/image/layout_set_logo?img_id=6059565&t=1642168486715"/><br>`;
    const monitors = xml.getElementsByTagName("monitors")[0];
    for (i = 0; i < monitors.childNodes.length; i++) {
      const data = monitors.childNodes[i].getElementsByTagName("lines")[0];
      const linie =
        data.getElementsByTagName("name")[0].childNodes[0].nodeValue;
      const richtung =
        data.getElementsByTagName("towards")[0].childNodes[0].nodeValue;
      const countdown =
        data.getElementsByTagName("countdown")[0].childNodes[0].nodeValue;
      const type = data.getElementsByTagName("type")[0].childNodes[0].nodeValue;
      var color;
      if (type.includes("ptBus")) color = "#1c60a7";
      else if (type === "ptTram") color = "#d3312c";
      else color = "#a4642c";

      console.log(type);
      const row = `<div class="transport">
      <div class="line" style="background-color:${color}"><span>${linie}</span></div>
      <span>${richtung}</span>
      <span>${countdown}</span>
    </div>`;
      content += row;
    }
    document.getElementById("wlinien").innerHTML = content;
    // sidebarContent = 2;
  };
  xhttp.open("GET", "wiener_linien.php");
  xhttp.send();
}
// marker2.addEventListener("click", function () {
//   if (!sidebarToggle) {
//     getTransportInfo();
//     document.getElementById("infoSidebar").style.width = "25%";
//     sidebarToggle = true;
//   } else {
//     if (sidebarContent == 2) {
//       sidebarToggle = false;
//       document.getElementById("infoSidebar").style.width = "0%";
//       document
//         .getElementById("infoSidebar")
//         .childNodes.forEach((child) => (child.style.opacity = "0"));
//     } else getTransportInfo();
//   }
// });
function getBikesInfo() {
  const xhttp = new XMLHttpRequest();
  xhttp.onloadstart = function () {
    document.getElementById("bikes").innerHTML = circularProgress;
  };
  xhttp.onload = function () {
    const xml = this.responseXML;
    var content = `<img class="logo" src="https://www.citybikewien.at/templates/citybike2015/images/logo-small.png"/><br>`;
    const allStations = xml.getElementsByTagName("station");
    for (let i = 0; i < allStations.length; i++) {
      let id =
        allStations[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
      if (id > 2001 && id < 2007) {
        const name =
          allStations[i].getElementsByTagName("name")[0].childNodes[0]
            .nodeValue;
        const id =
          allStations[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
        const freeBikes =
          allStations[i].getElementsByTagName("free_bikes")[0].childNodes[0]
            .nodeValue;
        const freeBoxes =
          allStations[i].getElementsByTagName("free_boxes")[0].childNodes[0]
            .nodeValue;
        const desc =
          allStations[i].getElementsByTagName("description")[0].childNodes[0]
            .nodeValue;
        const longitude =
          allStations[i].getElementsByTagName("longitude")[0].childNodes[0]
            .nodeValue;
        const latitude =
          allStations[i].getElementsByTagName("latitude")[0].childNodes[0]
            .nodeValue;
        const row = `<div class="station">
        <div class="thumbnail">
          <img src="./img/${id}.jpg" alt="thumbnail" />
        </div>
        <div class="name">
          <span>${name}</span>
          <br />
          <span>${desc}</span>
        </div>
        <div class="bb">
          <div class="bikes">
            <span class="amount">${freeBikes}</span> <span> free bikes</span>
          </div>
          <div class="boxes">
            <span class="amount">${freeBoxes}</span> <span> free boxes</span>
          </div>
          <div class="map" onClick="showStation(${latitude},${longitude})"><span class="material-icons ">map</span><span class="mapBtn">Show on map</span></div>
        </div>
      </div>`;
        content += row;
      }
    }
    document.getElementById("bikes").innerHTML = content;
    // sidebarContent = 3;
  };
  xhttp.open("GET", "bikes.php");
  xhttp.send();
}
// marker3.addEventListener("click", function () {
//   if (!sidebarToggle) {
//     getBikesInfo();
//     document.getElementById("infoSidebar").style.width = "25%";
//     sidebarToggle = true;
//   } else {
//     if (sidebarContent == 3) {
//       sidebarToggle = false;
//       document.getElementById("infoSidebar").style.width = "0%";
//       document
//         .getElementById("infoSidebar")
//         .childNodes.forEach((child) => (child.style.opacity = "0"));
//     } else getBikesInfo();
//   }
// });
function showStation(lat, lng) {
  var markerStation = L.marker([lat, lng]).addTo(mymap);
  mymap.flyTo([lat, lng], 18);
  window.setTimeout(function () {
    markerStation.remove();
  }, 15000);
}
/*var latlngs = [];

var latlng1 = [48.239155, 16.377445],
  latlng2 = [48.19023, 16.41513];

var offsetX = latlng2[1] - latlng1[1],
  offsetY = latlng2[0] - latlng1[0];

var r = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2)),
  theta = Math.atan2(offsetY, offsetX);

var thetaOffset = (3.14 / 14);

var r2 = (r / 2) / (Math.cos(thetaOffset)),
  theta2 = theta + thetaOffset;

var midpointX = (2*r2 * Math.cos(theta2)) + latlng1[1],
  midpointY = (r2 * Math.sin(theta2)) + latlng1[0];

var midpointLatLng = [midpointY, midpointX];

latlngs.push(latlng1, midpointLatLng, latlng2);

var pathOptions = {
  color: 'red',
  weight: 3
}*/
