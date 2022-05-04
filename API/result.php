<?php
 /*header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");*/

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods:  POST");
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-type:application/json");

//$post = json_decode(file_get_contents("php://input"));
$post ='default ';
if(!empty($_POST)) {
if (isset($_POST)){
  $post = $_POST ;

}
}

$post = json_decode(file_get_contents("php://input"));
$idSelect = (int)$post->id;
//$data = array("Peter"=>$num);

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

$sql = "SELECT * FROM `nokia` WHERE `id` = $idSelect" ;
$result = $conn->query($sql);
$data = [];
  while($row = $result->fetch_assoc()) {
    $data[] = $row;
}


$conn->close();






echo json_encode($data);
?>