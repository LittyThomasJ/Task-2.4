$(function() {
	// Toggle between login form and register form
	$('.reg a').click(function(event){
	    event.preventDefault();
	    $('form').animate({height:"toggle",opacity:"toggle"},"slow");
	});
	// Validation for registration page
	// to make span hide
	$("#email_error_message").hide();
	$("#password_error_message").hide();
	$("#conpassword_error_message").hide();
	// Variable for each input is set to false
	var error_email = false;
	var error_password = false;
	var error_confirm_password = false;
	// For checking input on focusout
	$("#Email").focusout(function() {
		check_email();
	});
	$("#Password").focusout(function() {
		check_password();
	});
	$("#conpassword").focusout(function() {
		check_confirm_password();
		// alert();

	});
	// Function for checking each fields
	function check_email() {
		var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if(pattern.test($("#Email").val()))
		{
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
				}
				else if (response == 'not_taken') {
					error_email = false;
					$("#email_error_message").hide();
				}
			}
	});
 });
	} else {
			$("#email_error_message").html("Enter valid email");
			$("#email_error_message").show();
			error_email = true;
			//$( "#Email" ).focus();
		}
	}
	function check_password() {

		var password_length = $("#Password").val().length;

		if(password_length < 6) {
			$("#password_error_message").html("At least 6 characters");
			$("#password_error_message").show();
			error_password = true;
			//$( "#CreatePassword" ).focus();
		} else {
			$("#password_error_message").hide();
		}
	}
	function check_confirm_password() {
// alert();
		var password = $("#Password").val();
		var cpassword = $("#conpassword").val();

		if(password !=  cpassword) {
			$("#conpassword_error_message").html("Password don't match the above");
			$("#conpassword_error_message").show();
			error_confirm_password = true;
			//$( "#CPassword" ).focus();
		} else {
			$("#conpassword_error_message").hide();
		}

	}
	// Check On submit function
	$("#register").submit(function(event) {
		error_email = false;
		error_password = false;
		error_confirm_password = false;
		check_email();
		check_password();
		check_confirm_password();
		// Checking each variable, whether variable is set to false,then it will return false and else returns true
		if ( error_email || error_password || error_confirm_password) {
			// return false;
			event.preventDefault();
		}
		else{
			return true;
		}
	});
	//-------------------------------------------------------------------------
	// Login page validation
	$("#login_email_error_message").hide();
	$("#login_password_error_message").hide();
	// Variable for each input is set to false
	var login_error_email = false;
	var login_error_password = false;
	// For checking input on focusout
	$("#login_Email").focusout(function() {
		check_login_email();
	});
	$("#login_Password").focusout(function() {
		check_login_password();
	});
	// // Check on key up
	// $("#login_Email").on("keyup change", function(e) {
 //    	check_login_password();
	// })
	// $("#login_Password").on("keyup change", function(e) {
 //    	check_login_password();
	// })
	// Function for checking each fields
	function check_login_email() {
		var lemail = $("#login_Email").val();
		var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if(pattern.test(lemail) && lemail != ''){
			$("#login_email_error_message").hide();
			error_login_email = false;
		}
		else{
			$("#login_email_error_message").html("Enter valid email");
			$("#login_email_error_message").show();
			error_login_email = true;
		}
	}
	function check_login_password() {
		var lpassword_length = $("#login_Password").val().length;

		if(lpassword_length < 6) {
			$("#login_password_error_message").html("At least 6 characters");
			$("#login_password_error_message").show();
			error_login_password = true;
			//$( "#CreatePassword" ).focus();
		} else {
			$("#login_password_error_message").hide();
		}
	}
	// Check On submit function
	$("#login").submit(function(event) {
		error_login_email = false;
		error_login_password = false;
		check_login_email();
		check_login_password();
		// event.preventDefault();
		// Checking each variable, whether variable is set to false,then it will return false and else returns true
		if (error_login_email || error_login_password) {
			// return false;
			event.preventDefault();
		}
		else{
			return true;
		}
	});
});
