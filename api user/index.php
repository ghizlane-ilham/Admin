<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case "GET":
        $sql = "SELECT * FROM authentification";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($users);
        break; 

    case "POST":
        $user = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO authentification(id, userName, email , genre ,password ,age ,objectif) VALUES(null, :userName, :email, :genre ,:password ,:age ,:objectif)";
        $stmt = $conn->prepare($sql);
        // $created_at = date('Y-m-d');
        $stmt->bindParam(':userName', $user->userName);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':genre', $user->gender);
        $stmt->bindParam(':password', $user->password);
        $stmt->bindParam(':age', $user->age);
        $stmt->bindParam(':objectif', $user->objectif);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Account created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create account.'];
        }
        echo json_encode($response);
        break;
        case "PUT":
            $correspondance = json_decode( file_get_contents('php://input') );
            $sql = "UPDATE 	authentification	 SET userName=:userName,email=:email,,gender=:genre,password=:password,,age=:age,,objectif=:objectif WHERE id = :id";
            $stmt = $conn->prepare("UPDATE 	authentification	 SET id=:id , userName=:userName,email=:email,,gender=:genre,password=:password,,age=:age,,objectif=:objectif  WHERE id = :id");
            $stmt->bindParam(':id', $correspondance->id , PDO::PARAM_STR);
            $stmt->bindParam(':userName', $correspondance->userName , PDO::PARAM_STR);
            $stmt->bindParam(':email', $correspondance->email , PDO::PARAM_STR);
            $stmt->bindParam(':genre', $correspondance->gender , PDO::PARAM_STR);
            $stmt->bindParam(':password', $correspondance->password , PDO::PARAM_STR);
            $stmt->bindParam(':age', $correspondance->age , PDO::PARAM_STR);
            $stmt->bindParam(':objectif', $correspondance->objectif , PDO::PARAM_STR);
       
            $stmt->execute();
            
            break;
        case "DELETE": 
            $sql = "DELETE FROM authentification WHERE id=:id";
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

