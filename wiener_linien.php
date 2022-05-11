<?php
header('Content-Type: text/xml');
$urlWienerLinien = "https://www.wienerlinien.at/ogd_realtime/monitor?rbl=319&rbl=322&rbl=2168&rbl=2494&rbl=2999";
$jsonWienerLinien = file_get_contents($urlWienerLinien);
$contentWienerLinien = json_decode($jsonWienerLinien,true);
$xml = new SimpleXMLElement('<root/>');
function arrayToXml($array, &$xml){
    foreach ($array as $key => $value) {
        if(is_int($key)){
            $key = "e";
        }
        if(is_array($value)){
            $label = $xml->addChild($key);
            arrayToXml($value, $label);
        }
        else {
            $xml->addChild($key, $value);
        }
    }
}
arrayToXml($contentWienerLinien, $xml);
print $xml->asXML();
?>