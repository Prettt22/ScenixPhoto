<?php
$dbhost='localhost';
$dbuser='root';
$dbpass='';
$dbname='hpstore';
$dbport=3306;

try{
    $conn=new PDO("mysql:host=$dbhost;port=$dbport;dbname=$dbname", $dbuser, $dbpass);
} catch(PDOException $x){
    die($x->getMessage());
}

?>