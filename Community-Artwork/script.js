

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  background('powderblue')
}

function mouseClicked(){
  let x=int(mouseX);
  let y=int(mouseY);

    console.log("x:"+x+""+"y:"+y)
}//display cooridnates when clicked on to the console

function draw(){
  {rect(150,50,100,150)//make triangle this size
  fill('red')//make the shape red
   noStroke()//get rid of lines
}
{rect(350,50,100,150)//make shape this size
    fill('white')// make shape this color
}
  {
    rect(250,50,100,150)//make shape this size
    fill('saddlebrown')//make shape this color
  }
  {
    ellipse(300,125,50,50)//make shape this size
    fill('black')//make shape this color
  }
  {
rect(150,200,5,490)//make shape this size
    fill('darkgreen')//make shape this color
  }
  {
    rect(0,490,877,900)//make shape this size
    fill('sienna')//make shape this color
  }
  {
    triangle(280,491,409,355,600,491)//make shape this size
fill('saddlebrown')// make shape this color
  }
  {
    quad(428,488,561,365,740,490,600,490)//make shape this size
    fill('sienna')//make shape this color
  }
  {
    triangle(750,361,654,490,878,490)//make shape this size
    fill('darkblue')//make shape this color
  }
  {
   ellipse(590,580,550,150)//make shape this size
    fill('green')//make shape this color
  }

  
}
