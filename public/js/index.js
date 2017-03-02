var value = 0;
var pos = 0;
var progressHidden = false;
var delay = 40;
var progressEl = $('progress');
var limite = ($('progress').prop( "max" )) + 1 ;

var timer = setInterval(progress, 50);

function progress() {

  
  // run counter
  value++;
  if (value < limite) {
    progressEl.val(value);
    pos = 1 - (value/100);
  } else if(value < (delay + 100) ) {
    progressEl.val(limite);
    pos = 0;
  } else {
    value = 0;
  }
  
  progressEl.css('background-position', '0 '+ pos +'em');

  if(!progressHidden && value >= limite-1) {
    clearInterval(timer);
  }
  
}