<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$idCategory = $idPrice = $action = '';
if(!empty($_POST)){
  if (isset($_POST)){
    $idCategory = $_POST['id'] ;
    $idPrice = $_POST['name'];
   $page = ((int)$_POST['page'] - 1)* 5;
   $action = strval($_POST['action']);
    }
}
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "banhang";
// nếu category = null và giá = 0
// sử lí cơ sở dữ liệu ra sao
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


if($action == 'all'){
  $sql = "  SELECT * FROM `nokia` " ;
  if ( $idPrice == '5<'){
    $sql = "SELECT * FROM `nokia` WHERE `giamoi` >= 5000000";
  }
  if ( $idPrice == '5>'){
    $sql = "SELECT * FROM `nokia` WHERE `giamoi` < 5000000";
  }
  if( $idCategory != 'null'){
    $sql = "  SELECT * FROM `nokia` WHERE `name` LIKE '%$idCategory%' " ;
  }
  if ($idPrice == '5<' && $idCategory != 'null'){
    $sql = "SELECT * FROM `nokia` WHERE `name` LIKE '%$idCategory%' AND `giamoi` >= 5000000";
  }
  if ($idPrice == '5>' && $idCategory != 'null'){
    $sql = "SELECT * FROM `nokia` WHERE `name` LIKE '%$idCategory%' AND `giamoi` < 5000000";
  }

}else {
  $sql = "  SELECT * FROM `nokia` LIMIT 5 OFFSET $page" ;

  if ( $idPrice == '5<'){
    $sql = "SELECT * FROM `nokia` WHERE `giamoi` >= 5000000 LIMIT 5 OFFSET $page";
  }
  if ( $idPrice == '5>'){
    $sql = "SELECT * FROM `nokia` WHERE `giamoi` < 5000000 LIMIT 5 OFFSET $page";
  }
  if( $idCategory != 'null'){
   $sql = "  SELECT * FROM `nokia` WHERE `name` LIKE '%$idCategory%' LIMIT 5 OFFSET $page" ;
  }
  if ($idPrice == '5<' && $idCategory != 'null'){
    $sql = "SELECT * FROM `nokia` WHERE `name` LIKE '%$idCategory%' AND `giamoi` >= 5000000 LIMIT 5 OFFSET $page";
  }
  if ($idPrice == '5>' && $idCategory != 'null'){
    $sql = "SELECT * FROM `nokia` WHERE `name` LIKE '%$idCategory%' AND `giamoi` < 5000000 LIMIT 5 OFFSET $page";
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