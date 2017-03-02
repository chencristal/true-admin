
function alert(data){
  $("#alert_").css("display","block");
  $("#alert_").append("<p>"+data+"</p>");
  setTimeout(function() {
    $("#alert_").css("display","none");
    $("#alert_ > p").remove();
  }, 4000);
}


//Función de post para validar la existencia del usename
function valid_user(){

	var username = document.getElementById("user").value;
	$.post('/forgetPassword/',{username:username}).fail().done(function(response){
		console.log();
		if (response == 'no_valid'){
			alert("No exist user.");
		}
		else{
			$("#h3confir1").css("display","block");
			$("#h3confir2").css("display","block");
			$("#h3confir2").text(response);
		}
	});//end jquery
}



