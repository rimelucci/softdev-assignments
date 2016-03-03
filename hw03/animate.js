/*
Rick Melucci
SoftDev2 pd 6
HW02 -- Connect the Dots
2016-02-12
*/

var c = document.getElementById("playground");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var dvd = document.getElementById("dvd");
var ctx = c.getContext("2d");
ctx.fillStyle = "red";
var grow = true;
var radius = 0;
var x = 100;
var y = 100;
var logo = new Image();
logo.src = "logo_dvd.jpg";
var left = false;
var right = true;
var up = false;
var down = true;


//This draws the circle and gets repeated every frame refresh
//clears and then draws another circle
//if it's touching the ends, then it switches between grow and shrink
//

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

var movedvd = function(){
  ctx.clearRect(0, 0, 700, 700);
  ctx.drawImage(logo, x, y, 150 , 100);

  if (x >= 700 - 150) {
    right = false;
    left = true;
  }

  else if (x <= 0) {
    left = false;
    right = true;
  }

  if (y <= 0) {
    up = false;
    down = true;
  }

  else if (y >= 700 - 100) {
    down = false;
    up = true;
  }

  if (right) {
    x = x + 2;
  }

  else if (left) {
    x = x - 2;
  }

  if (down) {
    y = y + 2;
  }

  else if (up) {
    y = y - 2;
  }
}

var animateCircle = function(){
  console.log("woo it worked");
  drawCircle();
  requestId = window.requestAnimationFrame(animate);
  //var msg = document.getElementById("message").innerHTML = "Press STOP to pause animation.";
}

var animateDVD = function(){
  //console.log("woo it worked");
  movedvd();
  requestId = window.requestAnimationFrame(animateDVD);
  //var msg = document.getElementById("message").innerHTML = "Press STOP to pause animation.";
}

start.addEventListener("click", function(e){
  console.log("woo it worked");
  drawCircle();
  requestId = window.requestAnimationFrame(animateCircle);
});

stop.addEventListener("click", function(e){
  //console.log("woo it worked");
  window.cancelAnimationFrame(requestId);
});

reset.addEventListener("click", function(e){
  window.cancelAnimationFrame(requestId);
  ctx.clearRect(0, 0, 700, 700); //clear each time the frame refreshes
});

dvd.addEventListener("click", function(){
  console.log("woo it worked");
  movedvd();
  requestId = window.requestAnimationFrame(animateDVD);
});
