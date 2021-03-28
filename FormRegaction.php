<?php
  include_once('connection.php');
  session_start();
  // Object created
  $con = new DbFunctions();
  // For registeration
  if(isset($_POST['register'])){
    // The contents that are posted are stored in coreesponding variablle
    $emailid = $_POST['Email'];
    $password = $_POST['Password'];
    $confirmPassword = $_POST['conpassword'];
    // to validate email ....calling EmailValidate()
    $val=$con->EmailValidate($emailid);
    // if validation 
		if($val != 1){
      if($password == $confirmPassword){
        // Check user exist or not
        $email = $con->isUserExist($emailid);
        if(!$email){
          // For registering User
          $register = $con->UserRegister($emailid, $password);
          if($register){
            // If user registered / added to database
            header("location:home.php");
            $message="Registration Successful";
          	$con->redirect($message);
          }else{
            // not registered
            $message="Registration Not Successful";
            $con->redirect($message);
          }
        }else{
          // If email already exists
          $message="Email Already Exist";
          $con->redirect($message);
        }
      }else{
        // Validating password and confirm password
        $message="Confirm password and Password Not Match";
        $con->redirect($message);
      }
    }else{
      // If invalid email
      $message="Invalid Email";
      $con->redirect($message);
    }
  }
  // For login ....if login is posted
  if(isset($_POST['login'])){
    // email and pasword posted are stored in a variablle
    $emailid = $_POST['Emaill'];
    $password = $_POST['Passwordd'];
    if (empty($emailid) || empty($password)) {
      // If no inputs
      $message="No Inputs";
      $con->redirect($message);
    }else{
      // If user exists
      $email = $con->isUserExist($emailid);
      if(!$email){
        $message="An account with this emailid Doesnt Exist";
        $con->redirect($message);
      }else {
        // calling login function 
        $user = $con->Login($emailid, $password);
        if ($user) {
            $lid=$_SESSION['email'];
            header("location:home.php");
        }else {
            $message="Emailid / Password Not Match";
            $con->redirect($message);
        }
      }
    }
  }
?>
