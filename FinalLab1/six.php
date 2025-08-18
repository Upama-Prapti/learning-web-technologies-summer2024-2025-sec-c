<?php
$arr = array(5, 10, 15, 20, 25);
$sr= 15;
$found = false;

foreach($arr as $val){
    if($val == $sr){
        $found = true;
        break;
    }
}

if($found){
    echo "$sr found in array";
} else {
    echo "$sr not found in array";
}
?>
