
$(function() {

	$("#name_error_message").hide();
	$("#lname_error_message").hide();
	$("#password_error_message").hide();
	$("#cpassword_error_message").hide();
	$("#email_error_message").hide();
	$("#phone_error_message").hide();

	var error_name = false;
	var error_lname = false;
	var error_password = false;
	var error_retype_password = false;
	var error_email = false;
	var error_phone = false;
	//var error_address = false;
	var pattern = /^[a-zA-Z]*$/;
		
//first name
	$("#FirstName").focusout(function() {

		check_username();
		//alert("error");
		
	});
	//last name
	$("#LastName").focusout(function() {

		check_lname();
		//alert("error");
		
	});
	//phone
	$("#Phone").focusout(function() {

		check_phone();
		//alert("err");
		
	});
	
	//email
	$("#Email").focusout(function() {

		check_email();
		
	});
	//pass
	$("#CreatePassword").focusout(function() {

		check_password();
		
	});
	//conf pass

	$("#CPassword").focusout(function() {

		check_retype_password();
		
	});
	
	//firstname
	function check_username() {
		var name = $("#FirstName").val();
		var no=name.length;
		if(pattern.test(name) && name != '' && no >=3)
		{
			
			$("#name_error_message").hide();
			//$("#name_error_message").html("Should be between 5-20 characters");
			//$("#name").css("border-bottum","2px solid #34f458");

		}
		else
		{
			$("#name_error_message").html("Enter valid name without number and space");
			$("#name_error_message").show();
			error_name = true;
			//$( "#FirstName" ).focus();
		}
}
	
		
	
	//last name
	
	function check_phone() {
		//var pattern = /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/;
		//var patter = /^\(?(\d{3})\)?[-\. ]?(\d{3})[-\. ]?(\d{4})$/;
		var patter = /^(?!(\d)\1{9})(?!0123456789|1234567890|9000000000|800000000|700000000|600000000|500000000)\d{10}$/ ;
		var phone = $("#Phone").val();
		/*if(phone != '')
		{
			
				
			$("#phone_error_message").hide();
			
			//$("#name_error_message").html("Should be between 5-20 characters");
			//$("#name").css("border-bottum","2px solid #34f458");

		}
		else if(!patter.test(phone)) 
			{
				$("#phone_error_message").html("Enter valid phone number");
				$("#phone_error_message").show();
				error_phone = true;
			}
		else
		{
			$("#phone_error_message").html("No space");
				$("#phone_error_message").show();
				error_phone = true;
			
		}*/
		if(patter.test(phone) && phone != '')
		{
			
			$("#phone_error_message").hide();
			//$("#name_error_message").html("Should be between 5-20 characters");
			//$("#name").css("border-bottum","2px solid #34f458");

		}
		else
		{
			$("#phone_error_message").html("Enter valid mobile number without space");
			$("#phone_error_message").show();
			error_lname = true;
			//$( "#LastName" ).focus();
		}
	}
	
	//phone
	function check_lname() {
		var LastName = $("#LastName").val();
		var no= LastName.length;
		if(pattern.test(LastName) && LastName != '' && no>=3)
		{
			
			$("#lname_error_message").hide();
			//$("#name_error_message").html("Should be between 5-20 characters");
			//$("#name").css("border-bottum","2px solid #34f458");

		}
		else
		{
			$("#lname_error_message").html("Enter valid name without number and space");
			$("#lname_error_message").show();
			error_lname = true;
			//$( "#LastName" ).focus();
		}
	}
	function check_email() {

		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	
		if(pattern.test($("#Email").val())) 
		{
			//$("#email_error_message").hide();
		
		 $('#Email').on('blur', function(){
 	var email = $('#Email').val();
 	if (email == '') {
 		error_email = true;
 		return;
 	}
 	$.ajax({
      url: 'checkemail.php',
      type: 'post',
      data: {
      	'email_check' : 1,
      	'Email' : email,
      },
      success: function(response){
      	if (response == 'taken' ) {
          error_email = true;
          $("#email_error_message").html("Email already exists");
			$("#email_error_message").show();
          //$('#Email').parent().removeClass();
          //$('#Email').parent().addClass("form_error");
          //$('#Email').siblings("span").text('Sorry... Email already taken');
      	}
      	else if (response == 'not_taken') {
      	  error_email = false;
      	  $("#email_error_message").hide();
      	}
      }
 	});
 });
	} else {
			$("#email_error_message").html("Enter valid email without space");
			$("#email_error_message").show();
			error_email = true;
			//$( "#Email" ).focus();
		}
	}
		function check_password() {
	
		var password_length = $("#CreatePassword").val().length;
		
		if(password_length < 6) {
			$("#password_error_message").html("At least 6 characters");
			$("#password_error_message").show();
			error_password = true;
			//$( "#CreatePassword" ).focus();
		} else {
			$("#password_error_message").hide();
		}
		/*
		var pass = $("#CreatePassword").val();
		if(pass == '') 
		{
		$('#CreatePassword').on('blur', function(){
 	var email = $('#CreatePassword').val();
 	var  pass= $('#Email').val();
 	if (email == '') {
 		error_password = true;
 		return;
 	}
 	$.ajax({
      url: 'checkpass.php',
      type: 'post',
      data: {
      	'email_check' : 1,
      	'Email' : email,
      	'pass' : pass,
      },
      success: function(response){
      	if (response == 'taken' ) {
          error_password = true;
          $("#password_error_message").html("Email and password already exist use another one");
			$("#password_error_message").show();
          //$('#Email').parent().removeClass();
          //$('#Email').parent().addClass("form_error");
          //$('#Email').siblings("span").text('Sorry... Email already taken');
      	}
      	else if (response == 'not_taken') {
      	  error_password = false;
      	  $("#password_error_message").hide();
      	}
      }
 	});
 });
	} else {
			$("#password_error_message").html("Enter valid email without space");
			$("#password_error_message").show();
			error_password = true;
			//$( "#Email" ).focus();
		}*/

	
	}

	function check_retype_password() {
	
		var password = $("#CreatePassword").val();
		var cpassword = $("#CPassword").val();
		
		if(password !=  cpassword) {
			$("#cpassword_error_message").html("Password don't match the above");
			$("#cpassword_error_message").show();
			error_retype_password = true;
			//$( "#CPassword" ).focus();
		} else {
			$("#cpassword_error_message").hide();
		}
	
	}
	
	$("#create_customer").submit(function() {
		error_name = false;
		error_lname = false;
		error_email = false;
		error_password =  false;
		error_retype_password = false;
		error_phone = false;
		check_username();
		check_lname();
		check_email();
		check_password();
		check_retype_password();
		check_phone();
		if (error_name === false && error_lname === false && error_phone === false && error_email === false && error_password === false && error_retype_password === false) {
			//alert("Registration successful");
			/*Swal.fire(
  'Registration successful',
  'Please login'
  
)*/
swal.fire({ type: 'success', title: 'Saved.', 
            showConfirmButton: false, timer: 2500 
}).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
         //$("#new_reminder").modal("hide");                            
    }
});
			return true;

		}
		else
		{
			Swal.fire(
  'Please fill the form correctly',
  'Otherwise not able to Move on'
  
)
			return false;
		}	
	});
});