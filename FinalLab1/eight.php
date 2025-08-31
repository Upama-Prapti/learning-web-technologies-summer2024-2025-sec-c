<?php
$arrx = [
    [1, 2, 3, 'A'],
    [1, 2, 'B', 'C'],
    [1, 'D', 'E', 'F']
];


for($i = 0; $i < 3; $i++){
    for($j = 0; $j < count($arrx[$i]); $j++){
        echo $arrx[$i][$j] . " ";
    }
    echo "<br>";
}
?>
