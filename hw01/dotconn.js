/*
Rick Melucci
SoftDev2 pd 6
HW02 -- Connect the Dots
2016-02-12
*/

var c = document.getElementById("playground");
var button = document.getElementById("clear");
var ctx = c.getContext("2d");
ctx.beginPath();

// clearRect defines a rectangle that will be erased
// the issue is that if I try to clear the screen, it works, but then I click on a different spot the drawing appears once again
button.addEventListener("click", function(e){
    console.log("woo it worked");
    e.preventDefault();
    ctx.beginPath();
    ctx.clearRect(0, 0, 1000, 700);
});

//setting colors for pretty pretty dots and lines
ctx.strokeStyle = "#FF0000";
ctx.fillStyle = "#FF0000";


// first event listener, takes care of the lines connecting each dot with the lineTo statement
c.addEventListener("click", function(e){
    //console.log("hi");
    //console.log(e.offsetX);
    //console.log(e.offsetY);
    var x = e.offsetX; //offsetX is value of x coordinate of the mouse
    var y = e.offsetY; //offsetY is value of y coordinate of the mouse
    ctx.lineTo(x, y);
    ctx.stroke();
});


//second event listener, takes care of the actual dots
// had to be done separately so that there would be no weird fills filling up the entire drawn shape (although that'd be cool)
c.addEventListener("click", function(e){
    ctx.beginPath();
    var x = e.offsetX;
    var y = e.offsetY;
    ctx.arc(x, y, 5, 10, 20); //forgot to rewrite this in yesterdays hw but the parameters are x-pos, y-pos, rad, and initial x and y angles
    ctx.fill();
});