<?php
require_once '../koneksi/koneksi.php';

$namahp=$_POST['nama_hp'];
$merek=$_POST['merek'];
$harga=$_POST['harga'];
$stok=$_POST['stok'];
$photoname=$_FILES['filePhoto']['name'];
$phototmp=$_FILES['filePhoto']['tmp_name'];

if(!empty($_POST['id_hp'])){
    try{
        move_uploaded_file($phototmp, '../photo/'.$photoname);
        $sql='UPDATE `data_hp` SET `nama_hp`=?, `merek`=?, `harga`=?, `stok`=?, `photo`=? WHERE id_hp=?';
        $q=$conn->prepare($sql);
        $q->execute([$namahp, $merek, $harga, $stok, 'photo/'.$photoname, $_POST['id_hp']]);

        echo "Data updated successfully!";
    } catch(PDOException $err){
        die("Error updating data: ".$err->getMessage());
    }
} else {
    try{
        move_uploaded_file($phototmp, '../photo/'.$photoname);
        $sql='INSERT INTO `data_hp` (`nama_hp`, `merek`, `harga`, `stok`, `photo`) VALUES (?, ?, ?, ?, ?)';
        $q=$conn->prepare($sql);
        $q->execute([$namahp, $merek, $harga, $stok, 'photo/'.$photoname]);

        echo "Data inserted successfully!";
    } catch(PDOException $err){
        die("Error inserting data: ".$err->getMessage());
    }
}
?>