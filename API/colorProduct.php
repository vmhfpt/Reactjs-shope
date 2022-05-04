<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "banhang";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


if ($_POST['type'] == 'image') {
  // $_POST['id_color']
  $sql = "SELECT * FROM `manage_color` WHERE `id_product` = ". $_POST['id_product'];
  //SELECT * FROM `library_color_product` WHERE `id_color` = 4
}else {
  //$id_color = 4;
  if (isset($_POST['id_color'])){
    $sql = "SELECT * FROM `library_color_product` WHERE `id_color` = " . $_POST['id_color'];
  }
  
}


$result = $conn->query($sql);

$data = [];
while ($row = $result->fetch_assoc()) {

  $data[] = $row;
}


$conn->close();


echo json_encode($data);
