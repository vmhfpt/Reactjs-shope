

<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "banhang";
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
//SELECT * FROM `nokia` WHERE `name` LIKE '%SamSung%' AND `giamoi` < 5000000
// $sql = 'SELECT * FROM `nokia` WHERE `giamoi` BETWEEN 2000000 AND 7000000';
//ORDER BY `nokia`.`giamoi` DESC
if (isset($_GET)) {
  $category =  $price = $page = 'underfine';
  $sort = '';
  if (isset($_GET['_sort'])) {
    if ($_GET['_sort'] == 'DESC') {
      $sort = 'ORDER BY `nokia`.`giamoi` DESC';
    }
    if ($_GET['_sort'] == 'ASC') {
      $sort = 'ORDER BY `nokia`.`giamoi` ASC';
    }
  }
  if (isset($_GET['_page'])) {
    if (isset($_GET['_page'])) {
      if ($_GET['_page'] == '') {
        $sql = "  SELECT * FROM `nokia` ";
        if ($_GET['_price'] == '2tr-5tr') {
          $sql = 'SELECT * FROM `nokia` WHERE `giamoi` BETWEEN 2000000 AND 7000000';
        }
        if ($_GET['_price'] == '5tr-7tr') {
          $sql = 'SELECT * FROM `nokia` WHERE `giamoi` BETWEEN 5000000 AND 7000000';
        }
        if ($_GET['_price'] == '7tr-11tr') {
          $sql = 'SELECT * FROM `nokia` WHERE `giamoi` BETWEEN 7000000 AND 11000000';
        }
        if (isset($_GET['_category'])) {
          if ($_GET['_category'] != 'underfine') {
            $sql = "SELECT * FROM `nokia` WHERE `name` LIKE '%" . $_GET['_category'] . "%'";
          }

          if ($_GET['_price'] == '2tr-5tr' && $_GET['_category'] != 'underfine') {

            $sql = "SELECT * FROM `nokia` WHERE `name` LIKE '%" . $_GET['_category'] . "%' AND `giamoi` BETWEEN 2000000 AND 5000000";
          }
          if ($_GET['_price'] == '5tr-7tr' && $_GET['_category'] != 'underfine') {

            $sql = "SELECT * FROM `nokia` WHERE `name` LIKE '%" . $_GET['_category'] . "%' AND `giamoi` BETWEEN 5000000 AND 7000000";
          }
          if ($_GET['_price'] == '7tr-11tr' && $_GET['_category'] != 'underfine') {

            $sql = "SELECT * FROM `nokia` WHERE `name` LIKE '%" . $_GET['_category'] . "%' AND `giamoi` BETWEEN 7000000 AND 11000000";
          }
        }
      } else {


        $page = ((int)$_GET['_page'] - 1) * 10;





        $sql = "  SELECT * FROM `nokia` $sort LIMIT 10 OFFSET $page";
        if ($_GET['_price'] == '2tr-5tr') {
          $sql = 'SELECT * FROM `nokia` WHERE `giamoi` BETWEEN 2000000 AND 5000000  ' . $sort . ' LIMIT 10 OFFSET ' . $page . '';
        }
        if ($_GET['_price'] == '5tr-7tr') {
          $sql = 'SELECT * FROM `nokia` WHERE `giamoi` BETWEEN 5000000 AND 7000000  ' . $sort . ' LIMIT 10 OFFSET ' . $page . ' ';
        }
        if ($_GET['_price'] == '7tr-11tr') {
          $sql = 'SELECT * FROM `nokia` WHERE `giamoi` BETWEEN 7000000 AND 11000000 ' . $sort . ' LIMIT 10 OFFSET ' . $page . '';
        }

        ///
        if (isset($_GET['_category'])) {
          if ($_GET['_category'] != 'underfine') {
            $sql = "SELECT * FROM `nokia` WHERE `name` LIKE '%" . $_GET['_category'] . "%' " . $sort . " LIMIT 10 OFFSET " . $page . " ";
          }

          if ($_GET['_price'] == '2tr-5tr' && $_GET['_category'] != 'underfine') {

            $sql = "SELECT * FROM `nokia` WHERE `name` LIKE '%" . $_GET['_category'] . "%' AND `giamoi` BETWEEN 2000000 AND 5000000 $sort LIMIT 10 OFFSET $page";
          }
          if ($_GET['_price'] == '5tr-7tr' && $_GET['_category'] != 'underfine') {

            $sql = "SELECT * FROM `nokia` WHERE `name` LIKE '%" . $_GET['_category'] . "%' AND `giamoi` BETWEEN 5000000 AND 7000000 $sort LIMIT 10 OFFSET $page";
          }
          if ($_GET['_price'] == '7tr-11tr' && $_GET['_category'] != 'underfine') {

            $sql = "SELECT * FROM `nokia` WHERE `name` LIKE '%" . $_GET['_category'] . "%' AND `giamoi` BETWEEN 7000000 AND 11000000 $sort LIMIT 10 OFFSET $page";
          }
        }
        ///

      }
    }
  }
}



$result = $conn->query($sql);
$data = [];
while ($row = $result->fetch_assoc()) {
  $data[] = $row;
}


$conn->close();






echo json_encode($data);
?>