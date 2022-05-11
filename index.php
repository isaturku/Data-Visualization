<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>DATA FLOW VISUALIZATION</title>

   <link rel="stylesheet" href="./mystyle.scss">
   <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet">
  <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
  integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
  crossorigin=""/>
      <!-- Javascript -->
	<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
crossorigin=""></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
<style>

body{
  padding: 0;
  margin: 0;
  font-family: 'Open Sans' , sans-serif;
}
html, body, #mapid {
        height: 100%;
        width: 100%;
    }
#refreshButton {
  position: absolute;
  top: 80px;
  right: 10px;
  padding: 10px;
  z-index: 400;
  border-radius:15px;
  background-color:rgba(1,1,1,0.3);
  text-align : left;
  width:20%;
  z-index: 1000;
}

#refreshButton p{
  color: white;
  font-size:0.85rem;
}


#refreshButton div{
  padding: 7px;
  vertical-align:middle;
}

#refreshButton div *{
  padding: 7px;
  vertical-align:middle;
}

#refreshButton .button{
  background-color: rgba(0,0,0,0);
  border-radius:10px;
  padding: 0;
  border: 0;
  float:right;
}

#refreshButton label{
  color:white;
  font-weight:bold;
}

.startBtn{
  color: green;
}

.stopBtn{
  color: red;
}

#showall{
  border-radius: 10px;
  padding: 5px 30px;
  border: 0;  
  vertical-align:middle;
  text-align:center;
  float:center;
}
#refreshButton h2{
  color:white;
  text-align:center;
}
#showalldiv{
  text-align:center;
}
td, th{
  text-align:center;
}

  </style>

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  </head>

  <body onload="init()">
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/leaflet@1.3.3/dist/leaflet.css">

    <script src="https://unpkg.com/leaflet@1.3.3/dist/leaflet.js"></script>

    <script src="https://elfalem.github.io/Leaflet.curve/src/leaflet.curve.js"></script>
    <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>


    <div id="mapid">

    </div>

    
     <?php
        // if(array_key_exists('button1', $_POST)) {
        //     button1();
        // }
        // else if(array_key_exists('button2', $_POST)) {
        //     button2();
        // }
        // function button1() {
        //   $url = 'https://www.wienerlinien.at/ogd_realtime/monitor?rbl=319&rbl=322&rbl=2168&rbl=2494&rbl=2999'; //&activateTrafficInfo=stoerunglang

        //   header('Content-type: charset=UTF-8');
        //   $content = file_get_contents ( $url );
        //   $json = json_decode ( $content, true );
          
          ?>
          
         
          
          <?php
        //    echo "Wiener Linien  Daten werden erfolgreich aufgerufen" ;
        //   foreach ($json['data']['monitors'] as $monitors) {
        //     foreach ($monitors['lines'] as $lines) {
        //       echo '<tr><td>';
        //       echo utf8_decode($lines['name']);
        //       echo '</td><td>';
        //       echo utf8_decode($lines['towards']);
        //       echo '</td><td>' . $lines['departures']['departure'][0]['departureTime']['countdown'] ;
        //       echo '</td></tr>';
        //     }
        //   }
        //   echo '</table>';
        // }
        // function button2() {
        //   $url = 'http://dynamisch.citybikewien.at/citybike_xml.php?json';
        // hellwagstrase(2003), jagerstrase u6(2002), millenium tower(2005), traisengasse(2004), friedrich engels platz(2006)

        //   header('Content-type: charset=UTF-8');
        //   $content = file_get_contents ( $url );
        //   $json = json_decode ( $content, true );
          
        //   ?>
          
         
          
           <?php
        //   foreach ($json as $data) {
        //     echo '<tr><td>';
        //     echo utf8_decode($data['name']);
        //     echo '</td><td>';
        //     echo utf8_decode($data['free_boxes']);
        //     echo '</td><td>';
        //     echo utf8_decode($data['free_bikes']);
        //     echo '</td></tr>';
        //   }
        //   echo '</table>';
        //   echo "City bikes Daten werden erfolgreich aufgerufen" ;
        // }
    ?> 

<!-- <form id="refreshButton" method="post">
       
              <div>
                <button type="submit" name="button1"
                class="button" value="Button1">Wiener Linien</button>
                </div>
          <div>
          <button type="submit" name="button2"
                class="button" value="Button2">citybikes</button>
                </div>
    </form>
    

      -->
  <div id="refreshButton" style="background-color: gray;">
    <h2>Data Visualization</h2>
    <p>You can click the buttons below to play and pause.</p>
    <div id="showalldiv">
      <button id="allbuttonloop" name="allstart" onclick="startall()"><span class="material-icons">loop</span></button>
      <button id="allbuttonplay" name="allplay" onclick="playall()"><span class="material-icons">play_arrow</span></button>
    </div>
    <div>
      <span><img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png" alt="Wiener Linien" width="20px"></span>
      <label for="wlstart">Wiener Linien: </label>
      <button id="wlbuttonplay" name="wlplay" class="button startBtn" onclick="playwl()"><span class="material-icons">play_arrow</span></button>
      <button id="wlbuttonloop" name="wlstart" class="button startBtn" onclick="startwl()"><span class="material-icons">loop</span></button>
    </div>
    <div>
      <span><img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png" alt="Wiener Linien" width="20px"></span>
      <label for="citystart">City Bikes: </label>
      <button id="citybuttonplay" name="cityplay" class="button startBtn" onclick="playcity()"><span class="material-icons">play_arrow</span></button>
      <button id="citybuttonloop" name="citystart" class="button startBtn" onclick="startcity()"><span class="material-icons">loop</span></button>
    </div>
    <div>
      <span><img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png" alt="Wiener Linien" width="20px"></span>
      <label for="wgstart">Wetter : </label>
      <button id="wgbuttonplay" name="wlplay" class="button startBtn" onclick="playwg()"><span class="material-icons">play_arrow</span></button>
      <button id="wgbuttonloop" name="wgstart" class="button startBtn" onclick="startwg()"><span class="material-icons">loop</span></button>
    
    </div>
    <div>
      <span><img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png" alt="Wiener Linien" width="20px"></span>
      <label for="wgstart">FH Technikum Wien</label>
    </div>
  
  </div>
  <div id="infoSidebar">
    <div id="weather"></div>
    <div id="bikes"></div>
    <div id="wlinien"></div>
  </div>

  <script type="text/javascript" src="./MovingMarker.js"></script>
	<script type="text/javascript" src="script.js"></script>

  </body>
</html>
