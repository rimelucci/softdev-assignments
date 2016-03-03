// Sets variable c to the element with id="c" (which is the canvas)
var c = document.getElementById("playground");
var clear = document.getElementById("clear");

// Sets variable ctx to the canvas and declares it as "2d"
var ctx = c.getContext("2d");

// fillStyle sets the color for any fill operations that follow which is why the solid rectangle is blue ("#0000FF")
ctx.fillStyle = "#0000FF";

// fillRect actually creates the rectangle with the properties set by fillStyle and by its parameters
// Parameters are (x-pos, y-pos, width, height)
// y-position, note that higher number means further down.
ctx.fillRect(100, 200, 100, 100);
ctx.fillRect(350, 200, 100, 100);

// strokeStyle sets the color for the stroke operations, which is why the color is red ("#FF0000")
ctx.strokeStyle = "#FF0000";

// strokeRect creates the rectangle with the set position, width, height and the color that was set by strokeStyle
// Parameters are (x-pos, y-pos, width, height)
ctx.strokeRect(219, 350, 100, 200);

//setting variable values for the functions used below
//var a = 200;
//var b = 177;

//Puts down the first point (kinda like putting down a pencil to paper)
ctx.beginPath();

// Parameters (x-pos, y-pos)
//Changes position of first point to (x, y) (like lifting the pencil to start off at another point in the paper)
ctx.moveTo(20, 538);


//lineTo creates a line from the last endpoint to the coordinate dictated by the parameters
//Sets endpoint at (x-pos, y-pos)
// Similar to dragging a pencil from the last point it was at to a new point (which is passed as a parameter) without lifting it from the paper.
ctx.lineTo(20, 200);
ctx.lineTo(275, 10);
ctx.lineTo(518, 200);
ctx.lineTo(518, 538);

//If the shape is open, then it connects the last endpoint to the first point
//Picks up the pencil (stops the actual drawing and allows the "cursor" to be moved to a different place without drawing anything)
ctx.closePath();

//actually makes the lines created above have color
ctx.stroke();

ctx.moveTo(300, 400);
ctx.arc(300, 400, 5, 10, 20);
ctx.stroke();


