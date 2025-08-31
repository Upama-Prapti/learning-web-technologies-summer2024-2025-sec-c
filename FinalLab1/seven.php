<?php

for($i = 1; $i <= 3; $i++){
    for($j = 1; $j <= $i; $j++){
        echo "* ";
    }
    echo "<br>";
}
echo "<br>";


for($i = 1; $i <= 3; $i++){
    for($j = $i; $j <= 3; $j++){
        echo $j;
    }
    echo "<br>";
}
echo "<br>";


$letr = ['A','B','C','D','E','F'];
$k = 0;
for($i = 1; $i <= 3; $i++){
    for($j = 1; $j <= 2; $j++){
        echo $letr[$k++] . " ";
    }
    echo "<br>";
}
?>
