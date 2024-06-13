var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var diameter = 50;
var xBallChange = 5;
var yBallChange = 5;
let UBorder;
let DBorder;
let TBorder;
let BBorder
var xPaddle;
var yPaddle;
var paddleWidth = 100;
var paddleHeight = 25;
var started = false;
let CCourt;
var score = 0;
let Tri;
let Trii;

function setup(){
 createCanvas(1000,1000);
    background('green');
  UBorder= new Border('gold',0,40,10)
  DBorder= new Border('gold',0,655,10)
  TBorder= new ub('white',0,40,0)
   BBorder= new ub('white',0,40,700)
  Ccourt= new Border('white',0,350,10)
  Tri= new tri('white',1,64,722)
  Trii= new tri('white',1,64,769)
  
}
function draw(){
background('green')
  noStroke()
fill('grey')
  rect(54,10,600,700)
  TBorder.drawBorder();
  UBorder.drawBorder();
  DBorder.drawBorder();
  BBorder.drawBorder();
  Ccourt.drawBorder();
Tri.drawtri();
  Trii.drawtri();
//background
Tri.moveRight();
  Trii.moveRight();
  fill('black');
noStroke();
xBall += xBallChange;
yBall += yBallChange;
  ellipse(xBall, yBall, diameter, diameter);
 if (xBall < diameter/2 || 
      xBall >  691 - 0.5*diameter) {
  xBallChange *= -1;
}
if (yBall < diameter/2 || 
     yBall > 725 - diameter) {
  yBallChange *= -1;
}
  if (!started) {
  xPaddle = 250 / 2;
  yPaddle = 700 - 100;
  started = true;
 
}
fill('blue');
noStroke();
rect(xPaddle, yPaddle, paddleWidth, paddleHeight);
  if ((xBall > xPaddle &&
      xBall < xPaddle + paddleWidth) &&
      (yBall + (diameter/2) >= yPaddle)) {
  xBallChange *= -1;
  yBallChange *= -1;
      score++;
}
   fill('black');
textSize(24);
text("Score: " + score, 10, 25);
  }



  







  


function keyPressed() {
  	if(keyIsPressed && key == 'a')
	{
		xPaddle = xPaddle-100;
	}
	if(keyIsPressed && key == 'd')
	{
		xPaddle = xPaddle+100;
	}
  //if (keyCode ===) {
   // yPaddle -= 50;
//  } else if (keyCode === BOTTOM_ARROW) {
    //yPaddle += 50;
 // }
}

function mouseClicked() {
    let x = int(mouseX);  // mouse x coordinate from click
    let y = int(mouseY);  // mouse y coordinate from click
    
    console.log("x: " + x + ", " + "y: " + y);

}


