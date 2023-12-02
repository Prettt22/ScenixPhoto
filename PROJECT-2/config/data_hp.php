<?php
require_once '../koneksi/koneksi.php';

try{
  $sql='SELECT * FROM `data_hp`';
  $q=$conn->prepare($sql);
  $q->execute();

  $data=array();
  while($row = $q->fetch(PDO::FETCH_ASSOC)){
      array_push($data,$row);
  }
  echo json_encode($data);
} catch(PDOException $err){
    die("tidak dapat memuat database $dbname: ".$err->getMessage());
}
?>