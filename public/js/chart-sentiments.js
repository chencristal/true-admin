/**
//Pintar Las caras de las emociones

var a = Math.floor((Math.random() * 40) + 20);
var b = Math.floor((Math.random() * 50) + 15);
var c = 100 -a;
var d =100-b;

var range_happy=[a,b,c,d];

document.getElementById("balloon_happy").innerHTML = range_happy[0]+'%';
document.getElementById("balloon_angry").innerHTML = range_happy[1]+'%';
document.getElementById("balloon_grateful").innerHTML = range_happy[2]+'%';
document.getElementById("balloon_sad").innerHTML = range_happy[3]+'%';

var range_div = 100;
var min_img = 10;

var chartWidth = document.getElementById("chart_sentiment").clientWidth -30;
var chartHeight = document.getElementById("chart_sentiment").clientHeight;

/*happy*/
/**
var happy_img = document.getElementById('img_happy');
happy_img.style.width = range_happy[0]+min_img+ "px";
happy_img.style.height = range_happy[0]+min_img+ "px";
var med = (((chartHeight)*(range_div-range_happy[0]))/range_div)-(happy_img.clientHeight/2 -25);
happy_img.style.top = med+ "px";
happy_img.style.left = ((chartWidth  * 0.2)  - (happy_img.clientWidth / 2)) + 64 + "px";

var balloon_happy = document.getElementById('balloon_happy');
balloon_happy.style.width = "50px";
balloon_happy.style.height = "50px";
var med = (((chartHeight)*(range_div-range_happy[0]))/range_div)-(balloon_happy.clientHeight/2 - 25);
balloon_happy.style.top = med - (happy_img.clientHeight/2) -(balloon_happy.clientHeight/2)+"px";
balloon_happy.style.left = ((chartWidth  * 0.2)  - (balloon_happy.clientWidth / 2)) + 64 + "px";
var bar_happy = document.getElementById('bar_happy');
var med = (((chartHeight)*(range_div-range_happy[0]))/range_div)-(bar_happy.clientHeight/2 -25);
bar_happy.style.top = med - (happy_img.clientHeight/2) -(bar_happy.clientHeight/2)+"px";
bar_happy.style.left = ((chartWidth  * 0.3)  - (bar_happy.clientWidth / 2)) + 64 + "px";   

/*angry*/
/**
var angry_img = document.getElementById('img_angry');
angry_img.style.width = range_happy[1]+min_img+ "px";
angry_img.style.height = range_happy[1]+min_img+ "px";
var med = (((chartHeight)*(range_div-range_happy[1]))/range_div)-(angry_img.clientHeight/2 -25);
angry_img.style.top = med+ "px";
angry_img.style.left = ((chartWidth  * 0.4)  - (angry_img.clientWidth / 2)) + 60 + "px";

var balloon_angry = document.getElementById('balloon_angry');
balloon_angry.style.width = "50px";
balloon_angry.style.height = "50px";
var med = (((chartHeight)*(range_div-range_happy[1]))/range_div)-(balloon_angry.clientHeight/2 -25);
balloon_angry.style.top = med - (angry_img.clientHeight/2) -(balloon_angry.clientHeight/2)+"px";
balloon_angry.style.left = ((chartWidth  * 0.4)  - (balloon_angry.clientWidth / 2)) + 60 + "px";

var bar_angry = document.getElementById('bar_angry');
var med = (((chartHeight)*(range_div-range_happy[1]))/range_div)-(bar_angry.clientHeight/2 -25);
bar_angry.style.top = med - (happy_img.clientHeight/2) -(bar_angry.clientHeight/2)+"px";
bar_angry.style.left = ((chartWidth  * 0.5)  - (bar_angry.clientWidth / 2)) + 60 + "px"; 

/*grateful*/
/**
var grateful_img = document.getElementById('img_happy_happy');
grateful_img.style.width = range_happy[2]+min_img+ "px";
grateful_img.style.height = range_happy[2]+min_img+ "px";
var med = (((chartHeight)*(range_div-range_happy[2]))/range_div)-(grateful_img.clientHeight/2 -25);
grateful_img.style.top = med+ "px";
grateful_img.style.left = ((chartWidth  * 0.6)  - (grateful_img.clientWidth / 2)) + 55 + "px";

var balloon_grateful = document.getElementById('balloon_grateful');
balloon_grateful.style.width ="50px";
balloon_grateful.style.height = "50px";  
var med = (((chartHeight)*(range_div-range_happy[2]))/range_div)-(balloon_grateful.clientHeight/2 -25)
balloon_grateful.style.top = med - (grateful_img.clientHeight/2) -(balloon_grateful.clientHeight/2)+"px";
balloon_grateful.style.left = ((chartWidth  * 0.6)  - (balloon_grateful.clientWidth / 2)) + 55 + "px";

var bar_grateful = document.getElementById('bar_grateful');
var med = (((chartHeight)*(range_div-range_happy[2]))/range_div)-(bar_grateful.clientHeight/2 -25);
bar_grateful.style.top = med - (happy_img.clientHeight/2) -(bar_grateful.clientHeight/2)+"px";
bar_grateful.style.left = ((chartWidth  * 0.7)  - (bar_grateful.clientWidth / 2)) + 55 + "px";   

/*sad*/
/**
var sad_img = document.getElementById('img_sad');
sad_img.style.width = range_happy[3]+min_img+ "px";
sad_img.style.height = range_happy[3]+min_img+ "px";
var med = (((chartHeight)*(range_div-range_happy[3]))/range_div)-(sad_img.clientHeight/2 -25);
sad_img.style.top = med+ "px";
sad_img.style.left = ((chartWidth  * 0.8)  - (sad_img.clientWidth / 2)) + 50 + "px";

var balloon_sad = document.getElementById('balloon_sad');
balloon_sad.style.width = "50px";
balloon_sad.style.height = "50px";  
var med = (((chartHeight)*(range_div-range_happy[3]))/range_div)-(balloon_sad.clientHeight/2 -25);
balloon_sad.style.top = med - (sad_img.clientHeight/2) -(balloon_sad.clientHeight/2)+"px";
balloon_sad.style.left = ((chartWidth  * 0.8)  - (balloon_sad.clientWidth / 2)) + 50 + "px";

var bar_sad = document.getElementById('bar_sad');
var med = (((chartHeight)*(range_div-range_happy[3]))/range_div)-(bar_sad.clientHeight/2 -25);
bar_sad.style.top = med - (happy_img.clientHeight/2) -(bar_sad.clientHeight/2)+"px";
bar_sad.style.left = ((chartWidth  * 0.9)  - (bar_sad.clientWidth / 2)) + 50   + "px";   

**/

/*MOUSE OVER*/
/**$( "#img_happy" ).mouseover(function() {
  document.getElementById("balloon_happy").style.visibility = "visible";
  document.getElementById("bar_happy").style.visibility = "visible";
});

$( "#img_happy" ).mouseout(function() {
  document.getElementById("balloon_happy").style.visibility = "hidden";
  document.getElementById("bar_happy").style.visibility = "hidden";       
});


$( "#img_angry" ).mouseover(function() {
  document.getElementById("balloon_angry").style.visibility = "visible";
  document.getElementById("bar_angry").style.visibility = "visible";        
});
$( "#img_angry" ).mouseout(function() {
  document.getElementById("balloon_angry").style.visibility = "hidden";
  document.getElementById("bar_angry").style.visibility = "hidden";             
});

$( "#img_happy_happy" ).mouseover(function() {
  document.getElementById("balloon_grateful").style.visibility = "visible";
  document.getElementById("bar_grateful").style.visibility = "visible";       
});
$( "#img_happy_happy" ).mouseout(function() {
  document.getElementById("balloon_grateful").style.visibility = "hidden";
  document.getElementById("bar_grateful").style.visibility = "hidden";        
});

$( "#img_sad" ).mouseover(function() {
  document.getElementById("balloon_sad").style.visibility = "visible";
  document.getElementById("bar_sad").style.visibility = "visible";        
});
$( "#img_sad" ).mouseout(function() {
  document.getElementById("balloon_sad").style.visibility = "hidden";
  document.getElementById("bar_sad").style.visibility = "hidden";               
});
**/

/*ANIMACIONES*/
/**    document.getElementById("img_happy").animate([
  { transform: 'translateY(-100px)' }, 
  { transform: 'translateY(0px)' }
], { 
  duration: 1000,
  iterations: 1
});

document.getElementById("img_angry").animate([
  { transform: 'translateY(-100px)' }, 
  { transform: 'translateY(0px)' }
], { 
  duration: 2000,
  iterations: 1
});

document.getElementById("img_happy_happy").animate([
  { transform: 'translateY(-50px)' }, 
  { transform: 'translateY(0px)' }
], { 
  duration: 3000,
  iterations: 1
});

document.getElementById("img_sad").animate([
  { transform: 'translateY(-50px)' }, 
  { transform: 'translateY(0px)' }
], { 
  duration: 4000,
  iterations: 1
});

range_happy.unshift(0);
range_happy.push(0);
//console.log('',range_happy);      

var chart = new Chartist.Line('.ct-chart', {
  labels: ['1', '2', '3', '4', '5'],
  series: [
    range_happy,
    [0,100]
  ]     
}, {
  low: 0,
  showArea: true        
});

// Let's put a sequence number aside so we can use it in the event callbacks
var seq = 0,
  delays = 80,
  durations = 500;

// Once the chart is fully created we reset the sequence
chart.on('created', function() {
  seq = 0;
});

// On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
chart.on('draw', function(data) {
  seq++;

  if(data.type === 'line') {
    // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
    data.element.animate({
      opacity: {
        // The delay when we like to start the animation
        begin: seq * delays + 1000,
        // Duration of the animation
        dur: durations,
        // The value where the animation should start
        from: 0,
        // The value where it should end
        to: 1
      }
    });
  } else if(data.type === 'label' && data.axis === 'x') {
    data.element.animate({
      y: {
        begin: seq * delays,
        dur: durations,
        from: data.y + 100,
        to: data.y,
        // We can specify an easing function from Chartist.Svg.Easing
        easing: 'easeOutQuart'
      }
    });
  } else if(data.type === 'label' && data.axis === 'y') {
    data.element.animate({
      x: {
        begin: seq * delays,
        dur: durations,
        from: data.x - 100,
        to: data.x,
        easing: 'easeOutQuart'
      }
    });
  } 
  else if(data.type === 'point') {        

    data.element.animate({
      x1: {
        begin: seq * delays,
        dur: durations,
        from: data.x - 10,
        to: data.x,
        easing: 'easeOutQuart',
      },
      x2: {
        begin: seq * delays,
        dur: durations,
        from: data.x - 10,
        to: data.x,
        easing: 'easeOutQuart'
      },
      opacity: {
        begin: seq * delays,
        dur: durations,
        from: 0,
        to: 1,
        easing: 'easeOutQuart'
      }
    });
  } else if(data.type === 'grid') {
    // Using data.axis we get x or y which we can use to construct our animation definition objects
    var pos1Animation = {
      begin: seq * delays,
      dur: durations,
      from: data[data.axis.units.pos + '1'] - 30,
      to: data[data.axis.units.pos + '1'],
      easing: 'easeOutQuart'
    };

    var pos2Animation = {
      begin: seq * delays,
      dur: durations,
      from: data[data.axis.units.pos + '2'] - 100,
      to: data[data.axis.units.pos + '2'],
      easing: 'easeOutQuart'
    };

    var animations = {};
    animations[data.axis.units.pos + '1'] = pos1Animation;
    animations[data.axis.units.pos + '2'] = pos2Animation;
    animations['opacity'] = {
      begin: seq * delays,
      dur: durations,
      from: 0,
      to: 1,
      easing: 'easeOutQuart'
    };
    data.element.animate(animations);
  }
});

// For the sake of the example we update the chart every time it's created with a delay of 10 seconds
chart.on('created', function() {
  if(window.__exampleAnimateTimeout) {
    clearTimeout(window.__exampleAnimateTimeout);
    window.__exampleAnimateTimeout = null;
  }
  window.__exampleAnimateTimeout = setTimeout(chart.update.bind(chart), 12000);
});**/