<?php
header('Content-Type: text/xml');
$urlbikes = "http://dynamisch.citybikewien.at/citybike_xml.php";
$contentbikes = file_get_contents($urlbikes);
echo $contentbikes;
?>