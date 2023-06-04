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
       $destination= $_SERVER['DOCUMENT_ROOT']."/admiin/admin/images"."/";
       $allproduct= mysqli_query($db_conn, "SELECT * FROM videose");
       if(mysqli_num_rows($allproduct) > 0)
       {
          while($row= mysqli_fetch_array($allproduct))
          {
           $json_array["productdata"][]= array("id"=>$row['id'], 
           "ptitle"=>$row["ptitle"],
           "pimage"=>$row["pfile"],
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
        $destination= $_SERVER['DOCUMENT_ROOT'].'/admiin/admin/images'."/".$pfile;

        $result= mysqli_query($db_conn,"INSERT INTO videose (ptitle,pfile, pstatus)
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
    case "PUT":
      $correspondance = json_decode( file_get_contents('php://input') );
      $sql = "UPDATE videose SET ptitle= :ptitle,pimage= :pfile,status=1 WHERE id = :id";
      $stmt = $conn->prepare("UPDATE videose SET id=:id , ptitle= :ptitle,pimage= :pfile,status=1  WHERE id = :id");
      $stmt->bindParam(':id', $correspondance->id , PDO::PARAM_STR);
      $stmt->bindParam(':ptitle', $correspondance->ptitle , PDO::PARAM_STR);
      $stmt->bindParam(':pfile', $correspondance->pimage , PDO::PARAM_STR);
      $stmt->bindParam('1', $correspondance->status , PDO::PARAM_STR);
 
      $stmt->execute();
      
      break;

    case "DELETE": 
      $sql = "DELETE FROM videose WHERE id = :id";
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