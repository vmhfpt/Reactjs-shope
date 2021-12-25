<?php
 header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");




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

$sql = "SELECT * FROM `menu` WHERE `parent_id` = 0";
$result = $conn->query($sql);
$data = [];
  // output data of each row
  while($row = $result->fetch_assoc()) {
      $data[] = $row;
  }
  
$conn->close();
echo json_encode($data);
?>