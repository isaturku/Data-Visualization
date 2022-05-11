<?php
header('Content-Type: text/xml');
$urlweather = "http://api.openweathermap.org/data/2.5/weather?id=2761369&appid=f8ade6e21dca34d6292242d07204b3dd&units=metric&mode=xml";
$contentweather = file_get_contents($urlweather);
echo $contentweather;
?>