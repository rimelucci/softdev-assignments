/*
Rick Melucci
SoftDev2 pd 6
HW02 -- Connect the Dots
2016-02-12
*/

var c = document.getElementById("playground");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var ctx = c.getContext("2d");
ctx.fillStyle = "red";

var grow = true;
var radius = 0;

var drawCircle = function() {
  ctx.clearRect(0, 0, 700, 700); //clear each time the frame refreshes
  if (grow) {
    radius = radius + 1;
  }
  else {
    radius = radius - 1;
  }

  if (radius == c.width / 2){
				grow = false;
	}

  else if ( radius == 0 ){
				grow = true;
		}

  ctx.beginPath();
	ctx.arc(c.width / 2, c.height / 2, radius, 0, 2 * Math.PI);
	ctx.closePath();
	ctx.fill();
}

var animate = function(){
  console.log("woo it worked");
  drawCircle();
  requestId = window.requestAnimationFrame(animate);
  //var msg = document.getElementById("message").innerHTML = "Press STOP to pause animation.";
}

start.addEventListener("click", function(e){
    console.log("woo it worked");
    drawCircle();
    requestId = window.requestAnimationFrame(animate);
		var msg = document.getElementById("message").innerHTML = "Press STOP to pause animation.";
});

stop.addEventListener("click", function(e){
    //console.log("woo it worked");
    
});
