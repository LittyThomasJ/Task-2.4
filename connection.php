<?php
// session started
  session_start();
  class DbFunctions{
    // create connection
  	public function create_connection(){
      $servername = "localhost";
  		$username = "root";
  		$password = "root";
  		$Db = "Task2";
      // Connection created
  		$con=new mysqli($servername, $username, $password,$Db);
  		return $con;
      if(!$con){
        die ("Cannot connect to the database");
      }else {
        die("success");
      }
  	}
    // Check email exist or not
  	public function Check_email_exist($sql)
  	{
  		$result=mysqli_query($this->create_connection(),$sql);
  		return $result;
  	}
    public function close(){
      mysqli_close();
    }
    // Is user exist or not
    public function isUserExist($emailid){
      $qr = mysqli_query($this->create_connection(),"SELECT * FROM tb_reg WHERE email = '".$emailid."'");
      $row = mysqli_num_rows($qr);
      //echo $row;
      if($row > 0){
        return true;
      }else{
        return false;
      }
    }
    // For registering user
    public function UserRegister($emailid, $password){
			$password = md5($password);
	    $qr = mysqli_query($this->create_connection(),"INSERT INTO tb_reg(email, password) values('".$emailid."','".$password."')") or die(mysql_error());
			echo $qr;
			if($qr){
				$_SESSION['email'] = $user_data['email'];
		    $_SESSION['login'] = true;
			}
    }
    // Validate email
    public function EmailValidate($email){
  		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  			$message="Email Incorrect";
  			$this->redirect($message);
  			return true;
  		 }
  	// }Function for redirection
  	public function redirect($message){
  		header("Location: Form.php?message=$message");
  	}
    // Function for login
    public function Login($emailid, $password){
      //echo "string";
      $res = mysqli_query($this->create_connection(),"SELECT * FROM tb_reg WHERE email = '".$emailid."' AND password = '".md5($password)."'");
      $user_data = mysqli_fetch_array($res);
      //print_r($user_data);
      $no_rows = mysqli_num_rows($res);
      // echo $no_rows;
      if($no_rows == 1){
        $_SESSION['email'] = $user_data['email'];
        $_SESSION['login'] = true;
        //echo "<script>alert( '$_SESSION['email']'');</script>";
        return TRUE;
      }
      else{
        return FALSE;
      }
    }
  }
?>
