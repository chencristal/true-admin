function alert(data){
  $("#alert_").css("display","block");
  $("#alert_").append("<p>"+data+"</p>");
  setTimeout(function() {
    $("#alert_").css("display","none");
    $("#alert_ > p").remove();
  }, 4000);
}

//Función de post para validar la existencia del usename
function restart_pass(){

	console.log('restart!!!');

	var token = document.getElementById("token").value;
	var new_pass = document.getElementById("newPass").value;
	var con_pass = document.getElementById("conPass").value;


	$.post('/restartPassword/',{token:token,new_pass:new_pass,con_pass:con_pass}).fail().done(function(response){
		if (response == 'no_token'){
			alert("Please try again. Token incorrect.");
		}
		else if (response == 'no_pass'){
			alert("Please try again. 'Confirm password' and 'New password' do not match");
		}else if (response == 'err_change'){
			alert("Internal error, please try again.");
		}
		else{
			alert("password changed");
		}
	});//end jquery
}

