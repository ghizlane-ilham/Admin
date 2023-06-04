<?php
error_reporting(E_ALL);
ini_set('display_errors',1);
header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$db_conn= mysqli_connect("localhost","root", "", "orgtime");
if($db_conn===false)
{
  die("ERROR: Could Not Connect".mysqli_connect_error());
}

$method = $_SERVER['REQUEST_METHOD'];
//echo "test----".$method; die;
switch($method)
{
    case "GET": 
      $path= explode('/', $_SERVER['REQUEST_URI']);

      if(isset($path[4]) && is_numeric($path[4]))
      {
        echo "Get Api Single Row"; die;
      } else {
       //echo "return all Data"; die;
       $destination= $_SERVER['DOCUMENT_ROOT']."/admiin/admin/boock"."/";
       $allproduct= mysqli_query($db_conn, "SELECT * FROM livres");
       if(mysqli_num_rows($allproduct) > 0)
       {
          while($row= mysqli_fetch_array($allproduct))
          {
           $json_array["productdata"][]= array("id"=>$row['id'], 
           "ptitle"=>$row["ptitle"],
           "pfile"=>$row["pfile"],
           "status"=>$row["pstatus"]
          );
          }
          echo json_encode($json_array["productdata"]);
          return;
       } else {
        echo json_encode(["result"=>"please check the Data"]);
        return;
       }


      }
      
       
    break;

    case "POST":
      if(isset($_FILES['pfile']))
      {      
        $ptitle= $_POST['ptitle'];
        $pfile= time().$_FILES['pfile']['name'];
        $pfile_temp= $_FILES['pfile']['tmp_name'];
        $destination= $_SERVER['DOCUMENT_ROOT'].'/admiin/admin/boock'."/".$pfile;

        $result= mysqli_query($db_conn,"INSERT INTO livres (ptitle,pfile, pstatus)
        VALUES('$ptitle','$pfile','1')");

        if($result)
        { 
          move_uploaded_file($pfile_temp, $destination);
          echo json_encode(["success"=>"Product Inserted Successfully"]);
           return;
        } else{
          echo json_encode(["success"=>"Product Not Inserted!"]);
           return;
        }

      } else{
        echo json_encode(["success"=>"Data not in Correct Format"]);
        return;
      }
        
    break;

    case "DELETE": 
      $sql = "DELETE FROM livres WHERE id=:id";
      $path = explode('/', $_SERVER['REQUEST_URI']);
      $stmt = $conn->prepare($sql);
      $stmt->bindParam(':id', $path[3]);
      $stmt->execute();
      if($stmt->execute()) {
          $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
      } else {
          $response = ['status' => 0, 'message' => 'Failed to delete record.'];
      }
      echo json_encode($response);
      break;

          

}


?>