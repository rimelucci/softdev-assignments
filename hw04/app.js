/*
Rick Melucci
SoftDev2 pd 6
HW04 -- Jamming with SVG's
2016-03-02
*/


//initializations
var pic = document.getElementById("vimage"); //grabs svg container
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var dvd = document.getElementById("dvd");

var left = false;
var right = true;
var up = false;
var down = true;
var svgNSID = "http://www.w3.org/2000/svg";
var radius = 0;
var growing = true;
var x = 250;
var y = 250;
var c = document.createElementNS(svgNSID, "circle");
var d = document.createElementNS(svgNSID, "image");

//Attributes of circle and add to screen
c.setAttribute("r", radius); //initially at 0
c.setAttribute("fill", "red");
c.setAttribute("cx", x); //initially at 250
c.setAttribute("cy", y); //initially at 250
c.setAttribute("stroke", "black");
d.setAttribute("cx", x); //initially at 250
d.setAttribute("cy", y); //initially at 250
d.setAttribute("xlink:href", "logo_dvd.jpg");

//grow is the parent function that will allow for the repetitive refresh
// with the setInterval
// The goodies are actually inside animateCode
var grow = function(){
      pic.appendChild( c );

      //defining a function within a function,
      //is called by intervalID's setInterval repeatedly and does the actual growing or shrinking
      //by changing the radius according to "growing"'s value (true or false)
      var animateCode = function(){
      		c = document.getElementsByTagName("circle")[0];
      		if (growing) {
            //console.log("hello");
            radius = radius + 1;
      		}
          else {
            radius = radius - 1;
          }

          if (radius >= 250 || radius <= 0) {
            growing = !growing;
          }
      		c.setAttribute("r", radius.toString());
    	}
    	intervalID = window.setInterval(animateCode, 16);
};

// stops the repeating effect
var stopAnimation = function(){
	window.clearInterval(intervalID)
}

start.addEventListener("click", function(){
  //console.log("woo it worked");
  grow();
});

stop.addEventListener("click", function(){
  //console.log("woo it worked");
  stopAnimation();
});

/* Reset function but didn't know the "clear" command for svg*/
reset.addEventListener("click", function(e){
  stopAnimation();
  pic.removeChild( c ); //clear each time the frame refreshes
});


//-------------------------------------------

//Start of DVD code:

var animateDVD = function(){
  console.log("woo");
  pic.appendChild( d );
  var moveDVD = function(){
        if (x >= 700 - 150) { //have to do the subtraction to account for dimensions of image
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

        else if (y >= 700 - 100) { //have to do the subtraction to account for dimensions of image
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
        d.setAttribute("cx", x); //initially at 250
        d.setAttribute("cy", y); //initially at 250
      }
      intervalID = window.setInterval(animateDVD, 16);
}

dvd.addEventListener("click", function(){
  console.log("woo it worked");
  animateDVD();
});
