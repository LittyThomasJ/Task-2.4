<?php
include_once('connection.php');
session_start();
//include('check_session.php');

    $con = new DbFunctions();
    if(isset($_POST['register'])){
        $emailid = $_POST['Email'];
        //echo $emailid;
        $password = $_POST['Password'];
        //echo $password;
        $confirmPassword = $_POST['conpassword'];
        //echo $confirmPassword;
        $val=$con->EmailValidate($emailid);
    		if($val != 1){
    			//echo "string";
          if($password == $confirmPassword){
            //echo "Success";
              $email = $con->isUserExist($emailid);
              if(!$email){
                //echo "Success";
                  $register = $con->UserRegister($emailid, $password);
                  if($register){
                      header("location:home.php");
                       // echo "<script>alert('Registration Successful')</script>";
                       $message="Registration Successful";
              		  $con->redirect($message);
                  }else{
                      // echo "<script>alert('Registration Not Successful')</script>";
                      $message="Registration Not Successful";
                      $con->redirect($message);
                  }
              } else {
                  //echo "Success";
                  // echo "<script>alert('Email Already Exist')</script>";
                  $message="Email Already Exist";
                  $con->redirect($message);
              }
          }else {
            $message="Confirm password and Password Not Match";
            $con->redirect($message);
              // echo "<script>alert('Password Not Match')</script>";

          }
      }else {
        // code...
        $message="Invalid Email";
        $con->redirect($message);
      }
    }
    if(isset($_POST['login'])){
        $emailid = $_POST['Emaill'];
        $password = $_POST['Passwordd'];
        //echo $emailid;
        if (empty($emailid) || empty($password)) {
          // code...
          $message="No Inputs";
          $con->redirect($message);
        }
        else{
          $email = $con->isUserExist($emailid);
          if(!$email){
            $message="An account with this emailid Doesnt Exist";
            $con->redirect($message);
          }else {
            $user = $con->Login($emailid, $password);
            //echo $user."dffg";
            if ($user) {
                $lid=$_SESSION['email'];
                echo $lid;
                header("location:home.php");
            }
            else {
                $message="Emailid / Password Not Match";
                $con->redirect($message);
            }

            }
          }
    }
?>
