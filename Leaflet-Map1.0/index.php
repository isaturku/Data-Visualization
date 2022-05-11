<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>DATA FLOW VISUALIZATION</title>

   <link rel="stylesheet" href="./mystyle.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
  integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
  crossorigin=""/>
      <!-- Javascript -->
	<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
crossorigin=""></script>

<style>
    #refreshButton {
  position: absolute;
  top: 80px;
  right: 20px;
  padding: 10px;
  z-index: 400;
}

  </style>


  </head>

  <body class>
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/leaflet@1.3.3/dist/leaflet.css">

    <script src="https://unpkg.com/leaflet@1.3.3/dist/leaflet.js"></script>

    <script src="https://elfalem.github.io/Leaflet.curve/src/leaflet.curve.js"></script>

    <div id="mapid">

    </div>

    
    <?php
        if(array_key_exists('button1', $_POST)) {
            button1();
        }
        else if(array_key_exists('button2', $_POST)) {
            button2();
        }
        function button1() {
          $url = 'https://www.wienerlinien.at/ogd_realtime/monitor?rbl=319&rbl=322&rbl=2168&rbl=2494&rbl=2999'; //&activateTrafficInfo=stoerunglang

          header('Content-type: charset=UTF-8');
          $content = file_get_contents ( $url );
          $json = json_decode ( $content, true );
          
          ?>
          
         
          
          <?php
           echo "Wiener Linien  Daten werden erfolgreich aufgerufen" ;
        /*  foreach ($json['data']['monitors'] as $monitors) {
            foreach ($monitors['lines'] as $lines) {
              echo '<tr><td>';
              echo utf8_decode($lines['name']);
              echo '</td><td>';
              echo utf8_decode($lines['towards']);
              echo '</td><td>' . $lines['departures']['departure'][0]['departureTime']['countdown'] ;
              echo '</td></tr>';
            }
          }
          echo '</table>';*/
        }
        function button2() {
          $url = 'http://dynamisch.citybikewien.at/citybike_xml.php?json';

          header('Content-type: charset=UTF-8');
          $content = file_get_contents ( $url );
          $json = json_decode ( $content, true );
          
          ?>
          
         
          
          <?php
         /* foreach ($json as $data) {
            echo '<tr><td>';
            echo utf8_decode($data['name']);
            echo '</td><td>';
            echo utf8_decode($data['free_boxes']);
            echo '</td><td>';
            echo utf8_decode($data['free_bikes']);
            echo '</td></tr>';
          }
          echo '</table>';*/
          echo "City bikes Daten werden erfolgreich aufgerufen" ;
        }
    ?>

<form id="refreshButton" method="post">
       
              <div>
                <button type="submit" name="button1"
                class="button" value="Button1">Wiener Linien</button>
                </div>
          <div>
          <button type="submit" name="button2"
                class="button" value="Button2">citybikes</button>
                </div>
    </form>
    

     


    <script type="text/javascript" src="./MovingMarker.js"></script>

	<script type="text/javascript" src="script.js"></script>

  </body>
</html>
