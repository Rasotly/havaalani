<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$flights = [
    [ "flightNo" => "TK961", "airline" => "Turkish Airlines", "destination" => "Istanbul (IST)", "time" => "18:00", "status" => "Zamanında" ],
    [ "flightNo" => "PC1853", "airline" => "Pegasus", "destination" => "Izmir (ADB)", "time" => "18:30", "status" => "Gecikmeli" ],
    [ "flightNo" => "VF123", "airline" => "AJet", "destination" => "Ankara (ESB)", "time" => "19:15", "status" => "Zamanında" ],
    [ "flightNo" => "PC1900", "airline" => "Pegasus", "destination" => "Istanbul (SAW)", "time" => "20:00", "status" => "İptal" ],
    [ "flightNo" => "TK963", "airline" => "Turkish Airlines", "destination" => "Istanbul (IST)", "time" => "20:45", "status" => "Kapı Kapandı" ]
];

echo json_encode($flights);
?>
