<?php
require_once '../koneksi/koneksi.php';

$id = $_POST['id_hp'];

try{
  $sql='DELETE FROM data_hp WHERE id_hp=?';
  $q=$conn->prepare($sql);
  $q->execute([$id]);

  echo "Data deleted successfully!";
} catch(PDOException $err){
  die("Error deleting data: ".$err->getMessage());
}
?>