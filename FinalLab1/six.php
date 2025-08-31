<?php
$arr = array(10, 20, 30, 40, 50);
$search = 30;
$found = false;

foreach($arr as $value){
    if($value == $search){
        $found = true;
        break;
    }
}

if($found){
    echo "$search found in array";
} else {
    echo "$search not found in array";
}
?>
