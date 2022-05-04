<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");





$servername = "localhost";
$username = "root";
$password = "";
$dbname = "banhang";
/*


    $countVote = 0;$test = 0;
           $TBCStar = 0;$Star = 1;
              foreach($resultVote as $key){
                  if( $test < 2){
                      $test ++;
                      continue ;
                  }
                  //echo  $key. "   ";
                  $TBCStar =  $TBCStar + ($Star * $key); 
                  $Star ++;
                  $countVote = $countVote +  $key;
              }
             
         
         ?>
     <?php
      if($countVote != 0){
        $temoarray = $TBCStar/$countVote;
       ?>

*/ // Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM `voteproduct` WHERE `id_product` = ".$_POST['id']."";
$result = $conn->query($sql);
$data = [];
while ($row = $result->fetch_assoc()) {
  $data[] = $row;
}

$conn->close();
$resultVote = $countVote = $test = $TBCStar = 0;
$Star = 1;
foreach ($data as $index) {
  foreach ($index as $key) {
    if ($test < 2) {
      $test++;
      continue;
    }
    $TBCStar =  $TBCStar + ($Star * $key);
    $Star++;
    $countVote = $countVote +  $key;
  }
}
if ($countVote != 0) {
  $temoarray = $TBCStar / $countVote;
  $resultVote = array("quantity" => $temoarray, "evaluate" => $countVote);
} else {
  $resultVote = array("quantity" => 0, "evaluate" => $countVote);
}
echo json_encode($resultVote);