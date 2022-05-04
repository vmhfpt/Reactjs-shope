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
$id_parent = $id_product = 0;
if(!empty($_POST)){
  if(isset($_POST['id_parent'])){
    $id_parent = $_POST['id_parent'];
  }
  if(isset($_POST['id_product'])){
    $id_product = (int)$_POST['id_product'];
  }
  if(isset($_POST['type'])){
    if($_POST['type'] == 'parent'){
      $sql = "SELECT * FROM `comment` WHERE `id_product` = ".$id_product." AND `id_parent` = 0 ORDER BY `id` DESC LIMIT 10 OFFSET 0" ;
    } else if($_POST['type'] == 'children') {
      $sql ="SELECT * FROM `comment` WHERE `id_product` = ".$id_product." AND `id_parent` = ".$id_parent." ORDER BY `content_comment` DESC" ;
    }
    if($_POST['type'] == 'post') {
      // post here
      $sql ="INSERT INTO `comment` (`id`, `id_product`, `id_parent`, `content_comment`, `name_user_comment`, `vote`, `NumberPhone`, `Gmail`) VALUES (NULL, '".$_POST['id_product']."', '".$_POST['id_parent']."', '".$_POST['contentComment']."', '".$_POST['name']."', NULL, '".$_POST['phoneNumber']."', '".$_POST['email']."')";
      $conn->query($sql);
      if ((int)$_POST['id_parent'] == 0){
        $sql = "SELECT * FROM `comment` WHERE `id_product` = ".$id_product." AND `id_parent` = 0 ORDER BY `id` DESC LIMIT 10 OFFSET 0" ;
      }else {
        $sql ="SELECT * FROM `comment` WHERE `id_product` = ".$id_product." AND `id_parent` = ".$id_parent." ORDER BY `content_comment` DESC" ;
      }
      
      //$arr = ['type' => $_POST['type'], "id_product" => $_POST['id_product'],"id_parent" => $_POST['id_parent'], "name" => $_POST['name'], "phoneNumber" => $_POST['phoneNumber'], "email" => $_POST['email'], "contentComment" => $_POST['contentComment']];
    //  echo json_encode($arr); die();
    }
  }
}

$result = $conn->query($sql);

$data = [];
  while($row = $result->fetch_assoc()) {
  
    $data[] = $row;

}


$conn->close();


echo json_encode($data);
?>