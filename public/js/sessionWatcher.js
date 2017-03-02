var max_inactiviy_min = 10;


var actual_time = Date.now();

document.onclick = function() {
	actual_time = Date.now();
};
document.onmousemove = function() {
	actual_time = Date.now();
};
document.onkeypress = function() {
	actual_time = Date.now();
};

window.setInterval(CheckIdleTime, 10000);

function CheckIdleTime() {

	if(actual_time + (max_inactiviy_min*60000) < Date.now()){
		$.post('/logout', function(response){
			window.location.replace("/");
		});
	}
    
}
