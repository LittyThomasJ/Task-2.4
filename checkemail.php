<?php
include_once('connection.php');
session_start();

if (isset($_POST['email_check'])) {
  	$email = $_POST['Email'];

  	$sql = "SELECT email FROM tb_reg WHERE email='$email'";
    $obj=new DbFunctions();
    $select=$obj->Check_email_exist($sql);
  	if (mysqli_num_rows($select) > 0) {
  	  echo "taken";
  	}else{
  	  echo 'not_taken';
  	}
  	exit();
  }
  ?>
