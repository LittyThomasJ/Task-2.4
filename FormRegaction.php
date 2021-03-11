<?php
include_once('connection.php');
session_start();
//include('check_session.php');
// Object created
    $con = new DbFunctions();
    // For registeration
    if(isset($_POST['register'])){
        $emailid = $_POST['Email'];
        $password = $_POST['Password'];
        $confirmPassword = $_POST['conpassword'];
        // validate email
        $val=$con->EmailValidate($emailid);
    		if($val != 1){
          if($password == $confirmPassword){
            // Check user exist or not
              $email = $con->isUserExist($emailid);
              if(!$email){
                // For registering User
                  $register = $con->UserRegister($emailid, $password);
                  if($register){
                      header("location:home.php");
                       $message="Registration Successful";
              		  $con->redirect($message);
                  }else{
                      $message="Registration Not Successful";
                      $con->redirect($message);
                  }
              } else {
                  $message="Email Already Exist";
                  $con->redirect($message);
              }
          }else {
            $message="Confirm password and Password Not Match";
            $con->redirect($message);
          }
      }else {
        $message="Invalid Email";
        $con->redirect($message);
      }
    }
    // For login
    if(isset($_POST['login'])){
        $emailid = $_POST['Emaill'];
        $password = $_POST['Passwordd'];
        if (empty($emailid) || empty($password)) {
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
