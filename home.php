<?php
include_once('connection.php');
if(isset($_POST['logout'])){
		echo "string";
        // remove all session variables
        session_unset();

        // destroy the session
        session_destroy();
    }
    if(!($_SESSION)){
        header("location:Form.php");
    }

?>
<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
	<link rel="stylesheet" type="text/css" href="css/home.css">
</head>
<body>
	<div class="container">
	<form action="" method="POST" name="logout">
	<p class="First-line"><strong>Hello User!</strong></p>
	<p class="Second-line">Our Service will be ready in <span id="count"></span></p>
	<!-- <p class="Third-line"><a href="#" name="logout" onclick="this.parentNode.submit();">Logout</a></p> -->
	<p class="Third-Line"><input type="Submit" name="logout" value="logout" id="submit" class="submit" style="background: none!important;
  border: none;
  padding: 0!important;
  font-family: arial, sans-serif;
  color: #111213;
  text-decoration: underline;
  cursor: pointer;font-size: medium;
    font-weight: bold;"/></p>
	</form>
	</div>
</body>
<script src="js/home.js"></script>
</html>
